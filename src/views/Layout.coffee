app = window.app || {}
app.views = app.views || {}
yamvc = window.yamvc

Layout = yamvc.View.extend(
  (all...)->
    yamvc.View.apply(@, all)
    @
)

Layout::init = (all...)->
  yamvc.View::init.apply(@, all)
  config = @get('config')
  #layout components
  config.views =
  #balance bar
    barBalance: new app.views.BarBalance
      config:
        id: 'current-balance',
        tpl: 'tpl-bar-balance',
        renderTo: '.balance-container'
        models:
          locale: new yamvc.Model
            config:
              namespace: 'locale'
            data:
              legend: 'Legend'
              expenses: 'expenses'
              resources: 'resources'
              currentBalance: 'Current balance'
        #assign static model
          balance: app.models.balance
  #action bar
    barActions: new app.views.Bar
      config:
        id: 'action-bar'
        tpl: 'tpl-bar-action'
        renderTo: '.layout-action-bar'
  #menu bar
    menu: new app.views.Menu
      config:
        id: 'menu'
        tpl: 'tpl-menu'
        renderTo: '.menu'
  #chart bar
    chart: new app.views.Chart
      config:
        id: 'dailyChart'
        tpl: 'tpl-chart'
        renderTo: '.container'

app.views.Layout = Layout

window.app = app