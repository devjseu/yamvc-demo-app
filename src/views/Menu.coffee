app = window.app || {}
app.views = app.views || {}
yamvc = window.yamvc

Menu = yamvc.View.extend(
  (all...)->
    yamvc.View.apply(this, all)
    this
)

Menu::init = (all...)->
  yamvc.View::init.apply(@, all)
  config = @get('config')
  #bar components
  config.views =
    buttonIncomes: new app.views.Button
      config:
        id : 'list-incomes'
        tpl: 'tpl-button'
        renderTo: '.menu-action'
        models:
          locale: new yamvc.Model
            config:
              namespace: 'locale'
            data:
              text: 'List all incomes'
    buttonExpenses: new app.views.Button
      config:
        id : 'list-expenses'
        tpl: 'tpl-button'
        renderTo: '.menu-action'
        models:
          locale: new yamvc.Model
            config:
              namespace: 'locale'
            data:
              text: 'List all expenses'

app.views.Menu = Menu
window.app = app