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

  currentDate = new Date()
  @set 'from', 1 + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear()
  @set 'to', currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear()
  #define model namespace
  config.namespace = 'balance'
  @set 'initOpts', initOpts
  yamvc.Model::initConfig.apply(@, all)

Balance::setRange = (from, to)->
  @set 'from', from
  @set 'to', to

Balance::load = ()->
  @set 'toLoad', 2
  @loadResources()
  @loadExpenses()
  @
Balance::loadResources = ()->
  me = @
  resources = 0
  from = new Date(app.logic.Date.parse(@get 'from'))
  to = new Date(app.logic.Date.parse(@get 'to'))
  db = app.data.db.getConnection()
  q = db.from('incomes')
  q.where('date', '>=', from.getTime(), '<', to.getTime() + 24*60*60*1000)
  .list()
  .done(
      (records)->
        i = 0
        l = records.length
        while (i < l)
          resources += parseFloat(records[i].value)
          i++
        me.$set 'resources', resources
        me.set 'toLoad', me.get('toLoad') - 1
        if me.get('toLoad') is 0
          me.recalculate.call(me)
    )

Balance::loadExpenses = ()->
  me = @
  expenses = 0
  from = new Date(app.logic.Date.parse(@get 'from'))
  to = new Date(app.logic.Date.parse(@get 'to'))
  db = app.data.db.getConnection()
  q2 = db.from('expenses')
  q2.where('date', '>=', from.getTime(), '<', to.getTime() + 24*60*60*1000)
  .list()
  .done(
      (records)->
        i = 0
        l = records.length
        while (i < l)
          expenses -= parseFloat(records[i].value)
          i++
        me.$set 'expenses', expenses
        me.set 'toLoad', me.get('toLoad') - 1
        if me.get('toLoad') is 0
          me.recalculate.call(me)
    )

Balance::recalculate = ()->
  @$set 'available', (@$get('resources') + @$get('expenses'))

Balance::all = (all...)->

Balance::getBalance = (all...)->


#static
app.models.balance = new Balance

window.app = app