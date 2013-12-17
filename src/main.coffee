# define namespace
app = window.app || {}
yamvc = window.yamvc

#app init func
app.init = ->
  #db connection
  app.data.db = new app.data.Db
    config:
      name: 'culturalMe'
      schema:
        stores: [
          {
            name: 'incomes'
            keyPath: 'id'
            autoIncrement: true,
            indexes: [
              {
                keyPath: 'date'
              }
            ]
          },
          {
            name: 'expenses'
            keyPath: 'id'
            autoIncrement: true,
            indexes: [
              {
                keyPath: 'date'
              }
            ]
          }
        ]


  #layout
  app.views.layout = new app.views.Layout
    config:
      id: 'layout'
      tpl: 'tpl-layout',
      renderTo: '#container'

  #layout2
  app.views.layout2 = new app.views.Layout2
    config:
      id: 'layout-2'
      tpl: 'tpl-layout-2',
      renderTo: '#container'

  #window are rendered outside layout
  #window - add income
  app.views.income = new app.views.form.AddIncome
    config:
      id: 'add-income'
      tpl: 'tpl-window'
      renderTo: 'body'
  app.views.income.render()

  #window - add expense
  app.views.expense = new app.views.form.AddExpense
    config:
      id: 'add-expense'
      tpl: 'tpl-window'
      renderTo: 'body'
  app.views.expense.render()

  #define controllers
  app.controlles =
  #main controller
    main: new yamvc.Controller
      config:
        name: 'Main'
        views:
          "layout": app.views.layout
          "layout-2": app.views.layout2
        #set routes
        routes:
          "": 'home'
          "show-expenses": 'showExpenses'
          "show-incomes": 'showIncomes'
      #delegate events
        events:
        #for views
          "$layout":
            render: ()->
              app.models.balance.load()
              setTimeout(
                ->
                  app.mask.hide()
                500
              )
            show : ()->
              setTimeout(
                ->
                  app.mask.hide()
                500
              )
          "$layout-2":
            render: ()->
              console.log('test')
              setTimeout(
                ->
                  app.mask.hide()
                500
              )
            show : ()->
              setTimeout(
                ->
                  app.mask.hide()
                500
              )
        #for DOM elements
          '.add-expense a':
            click: (view, e)->
              e.preventDefault()
              @onExpenseBtnClick()
          '.add-income a':
            click: (view, e)->
              e.preventDefault()
              @onIncomeBtnClick()
          '.layout-2-action-bar .button':
            click: (view, e)->
              e.preventDefault()
              @onBackBtnClick()
          '[yamvc-id="list-incomes"] a':
            click: (view, e)->
              e.preventDefault()
              @onListIncomesBtnClick()
          '[yamvc-id="list-expenses"] a':
            click: (view, e)->
              e.preventDefault()
              @onListExpensesBtnClick()
      onBackBtnClick: ()->
        @redirectTo('')
      onExpenseBtnClick: ()->
        yamvc.ViewManager.get('add-expense').show()
      onIncomeBtnClick: ()->
        yamvc.ViewManager.get('add-income').show()
      onListIncomesBtnClick: ()->
        app.mask.show()
        @redirectTo('show-incomes')
      onListExpensesBtnClick: ()->
        app.mask.show()
        @redirectTo('show-expenses')
      home: ()->
        app.views.layout2.hide()
        if app.views.layout.isInDOM()
          app.views.layout.show()
        else
          app.views.layout.render()
      showExpenses: ()->
        app.views.layout.hide()
        if app.views.layout2.isInDOM()
          app.views.layout2.show()
          app.views.layout2.getChild('expenses').getModel('expenses').load()
        else
          app.views.layout2.render()
        app.views.layout2.getChild('incomes').hide()
        app.views.layout2.getChild('expenses').show()
      showIncomes: ()->
        app.views.layout.hide()
        if app.views.layout2.isInDOM()
          app.views.layout2.show()
          app.views.layout2.getChild('incomes').getModel('incomes').load()
        else
          app.views.layout2.render()
        app.views.layout2.getChild('incomes').show()
        app.views.layout2.getChild('expenses').hide()

  @

window.app = app

#fire when ready!
yamvc.onReady(
  app.init
)