# define namespace
app = window.app || {}
yamvc = window.yamvc

#app init func
app.init = ->
  #layout
  app.layout = new app.views.Layout
    config:
      autoCreate: true,
      tpl: 'tpl-layout',
      renderTo: '#container'

  #define controllers
  app.controlles =
    main: new yamvc.Controller
      config:
        name: 'Main'
        views:
          layout: app.layout
        #delegate events
        events:
          #for views
          $layout:
            render: ()->
              setTimeout(
                ->
                  app.mask.hide()
                500
              )
          '.add-expense a':
            click : (view, e)->
              e.preventDefault()
              this.onExpenseBtnClick()
          '.add-income a':
            click : (view, e)->
              e.preventDefault()
              this.onIncomeBtnClick()
          '[yamvc-id="list-incomes"] a':
            click : (view, e)->
              e.preventDefault()
              this.onListIncomesBtnClick()
          '[yamvc-id="list-expenses"] a':
            click : (view, e)->
              e.preventDefault()
              this.onListExpensesBtnClick()
      onExpenseBtnClick : ()->
        yamvc.ViewManager.get('add-expense').show()
      onIncomeBtnClick : ()->
        yamvc.ViewManager.get('add-income').show()
      onListIncomesBtnClick: ()->
        console.log('list incomes click')
      onListExpensesBtnClick: ()->
        console.log('list expenses click')

  @

window.app = app

#fire when ready!
yamvc.onReady(
  app.init
)