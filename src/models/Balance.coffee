app = window.app || {}
app.models = app.models || {}
yamvc = window.yamvc

Balance = yamvc.Model.extend(
  (all...)->
    yamvc.Model.apply(@, all)
    @
)

Balance::init = (all...)->
  yamvc.Model::init.apply(@, all)

Balance::initConfig = (all...)->
  config = @get 'config'
  initOpts = @get 'initOpts'
  #define default data
  initOpts.data =
    resources: 0
    expenses: 0
    available: 0
    month: 1
  #define model namespace
  config.namespace = 'balance'
  @set 'initOpts', initOpts
  yamvc.Model::initConfig.apply(@, all)

Balance::setRange = (from, to)->
  @set 'from', from
  @set 'to', to

Balance::load = (all...)->
  me = @
  balance = 0
  date = new Date();
  date2 = new Date();
  date.setFullYear(2013,11,1);
  date2.setFullYear(2014,1,1);
  db = app.data.db.getConnection()
  q = db.from('incomes')
  q.where('date', '>=', date.getTime(), '<', date2.getTime())
  .list()
  .done(
      (incomes)->
        i = 0
        l = incomes.length
        while (i < l)
          balance += parseFloat(incomes[i].value)
          i++
        func()
    )

  func = ()->
    q2 = db.from('expenses')
    q2.where('date', '>=', date.getTime(), '<', date2.getTime())
    .list()
    .done(
        (incomes)->
          i = 0
          l = incomes.length
          while (i < l)
            balance -= parseFloat(incomes[i].value)
            i++
          me.$set('resources', balance)
      )

  @

Balance::recaulculate = (all...)->

Balance::all = (all...)->

Balance::getBalance = (all...)->


#static
app.models.balance = new Balance

window.app = app