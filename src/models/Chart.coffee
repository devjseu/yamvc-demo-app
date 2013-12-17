app = window.app || {}
app.models = app.models || {}
yamvc = window.yamvc

Chart = yamvc.Model.extend(
  (all...)->
    yamvc.Model.apply(@, all)
    @
)

Chart::init = (all...)->
  yamvc.Model::init.apply(@, all)

Chart::initConfig = (all...)->
  config = @get 'config'
  initOpts = @get 'initOpts'
  #define default data
  initOpts.data =
    type: 'AreaChart'
    title: 'Long term balance'
    isStacked: true
    data: [
      ['Day', 'Balance']
      ['1', 0]
    ]
  #define model namespace
  config.namespace = 'balance'
  @set 'initOpts', initOpts
  yamvc.Model::initConfig.apply(@, all)

Chart::setRange = (from, to)->
  @set 'from', from
  @set 'to', to

Chart::load = ()->
  @set 'toLoad', 2
  @loadResources()
  @loadExpenses()
  @

Chart::loadResources = ()->
  me = @
  incomes = []
  db = app.data.db.getConnection()
  q2 = db.from('incomes')
  q2.list()
  .done(
      (records)->
        i = 0
        l = records.length
        while (i < l)
          incomes.push
            date: records[i].date
            value: parseFloat(records[i].value)
          i++
        me.set 'incomes', incomes
        me.set 'toLoad', me.get('toLoad') - 1
        if me.get('toLoad') is 0
          me.recalculate.call(me)
    )

Chart::loadExpenses = ()->
  me = @
  expenses = []
  db = app.data.db.getConnection()
  q2 = db.from('expenses')
  q2.list()
  .done(
      (records)->
        i = 0
        l = records.length
        while (i < l)
          expenses.push
            date: records[i].date
            value: -parseFloat(records[i].value)
          i++

        me.set 'expenses', expenses
        me.set 'toLoad', me.get('toLoad') - 1
        if me.get('toLoad') is 0
          me.recalculate.call(me)
    )

Chart::recalculate = ()->
  now = new Date()
  time = now.getTime()
  chartsData = [
    ['Day', 'Balance']
  ]
  balance = 0
  operation = @get 'incomes'
  operation = (operation.concat @get 'expenses')
  operation.sort(
    (a, b)->
      return a.date - b.date
  )
  i = 0
  l = operation.length
  while i < l
    balance += operation[i].value
    date = new Date(operation[i].date)
    dateTime = date.getTime()
    if (dateTime + 31 * 24 * 60 * 60 * 1000) > time
      chartsData.push(
        [
           date.getDate() + '/' +(date.getMonth() + 1),
          balance
        ]
      )
    i++
  @$set 'data', chartsData


Chart::all = (all...)->

Chart::getChart = (all...)->


#static
app.models.chart = new Chart

window.app = app