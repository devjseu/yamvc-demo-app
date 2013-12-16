app = window.app || {}
app.views = app.views || {}
yamvc = window.yamvc

Bar = yamvc.View.extend(
  (all...)->
    yamvc.View.apply(this, all)
    this
)

Bar::init = (all...)->
  yamvc.View::init.apply(@, all)
  config = @get('config')
  #bar components
  config.views =
    buttonExpense:
      new app.views.Button
        config:
          tpl: 'tpl-button'
          renderTo: '.add-expense'
          models:
            locale: new yamvc.Model
              config:
                namespace: 'locale'
              data:
                text : 'Add Expense'
    buttonIncome:
      new app.views.Button
        config:
          tpl: 'tpl-button'
          renderTo: '.add-income'
          models:
            locale: new yamvc.Model
              config:
                namespace: 'locale'
              data:
                text : 'Add Income'

app.views.Bar = Bar

window.app = app