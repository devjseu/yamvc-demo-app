app = window.app || {}
app.views = app.views || {}
yamvc = window.yamvc

Balance = yamvc.View.extend(
  (all...)->
    yamvc.View.apply(@, all)
    @
)

Balance::init = (all...)->
  yamvc.View::init.apply(@, all)
  @bindEvents();
  @

Balance::bindEvents = ()->
  @addListener('render', @bindElements.bind(@))
  @addListener('render', @ajustBarsWidth.bind(@))
  @getModel('balance').addListener('dataExpensesChange', @updateBalance.bind(@))
  @getModel('balance').addListener('dataResourcesChange', @updateBalance.bind(@))
  @getModel('balance').addListener('dataChange', @updateBalance.bind(@))
  @

Balance::bindElements = ()->
  @set('$resources', @queryEl('.bar-balance-resources'))
  @set('$expenses', @queryEl('.bar-balance-expenses'))
  @


Balance::updateBalance = ()->
  @recalculateModel()
  @partialRender('.bar-balance-resources')
  @partialRender('.bar-balance-expenses')
  @partialRender('.bar-balance-current')
  @ajustBarsWidth()
  @

Balance::ajustBarsWidth = ()->
  expenses = @getModel('balance').$get('expenses')
  resources = @getModel('balance').$get('resources')
  if expenses == 0 and resources == 0
    expensesWidth = 0
    resourcesWidth = 100
    expensesLeft = 0
    resourcesLeft = 0
  else if expenses >= resources
    expensesWidth = 100
    resourcesWidth = 0
    expensesLeft = 0
    resourcesLeft = 0
  else
    expensesWidth = if expenses == 0 then 0 else parseInt expenses / (resources / 100)
    resourcesWidth = 100 - expensesWidth
    expensesLeft = 0
    resourcesLeft = expensesWidth

  @get('$resources').style.width = resourcesWidth + "%"
  @get('$resources').style.left = resourcesLeft + "%"
  @get('$expenses').style.width = expensesWidth + "%"
  @get('$expenses').style.left = expensesLeft + "%"
  @

Balance::recalculateModel = ()->
#  @getModel('balance').calculateBalance()

app.views.BarBalance = Balance

window.app = app