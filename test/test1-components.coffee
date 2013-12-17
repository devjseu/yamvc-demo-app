test(
  "Mask component tests"
  ->
    data =
      pleaseWait: 'Please wait'

    mask = new app.views.Mask
      config:
        models:
          locale: new yamvc.Model
            config:
              namespace: 'locale'
            data: data
        id: 'mask-main'
        tpl: 'tpl-mask'
        renderTo: 'body'

    ok(
      mask instanceof yamvc.View
      "Mask is instance of view"
    )

    mask.render()

    ok(
      mask.isInDOM()
      "Mask was added to the DOM"
    )

    mask.show()
    equal(
      mask.get('el').style.display
      'table'
      "Mask is visible"
    )

    mask.hide()
    equal(
      mask.get('el').style.display
      'none'
      "Mask is hidden"
    )
)

test(
  "Button component tests"
  ->
    data =
      add: 'add'


    btn = new app.views.Button
      config:
        models:
          locale: new yamvc.Model
            config:
              namespace: 'locale'
            data: data
        id: 'btn-add'
        tpl: 'tpl-button'
        renderTo: '#container'

    ok(
      btn instanceof yamvc.View
      "Button is instance of view"
    )

    btn.render()

    ok(
      btn.isInDOM()
      "Button was added to the DOM"
    )

)

test(
  "Balance Bar component tests"
  ->

    bar = new app.views.BarBalance
      config:
        id: 'current-balance',
        tpl: 'tpl-bar-balance',
        renderTo: '#container'
        models:
          locale: new yamvc.Model
            config:
              namespace: 'locale'
            data:
              legend: 'Legend'
              expenses: 'expenses'
              resources: 'resources'
              currentBalance: 'Current balance'
          balance: app.models.balance


    ok(
      bar instanceof yamvc.View
      "Bar is instance of app.views.BarBalance"
    )

    bar.render()

    ok(
      bar.isInDOM()
      "Balance Bar was added to the DOM"
    )


    ok(
      bar.getModel('balance').$get('resources') is 0
      "After initialize resources shoudle be equal 0"
    )
    ok(
      bar.getModel('balance').$get('expenses') is 0
      "After initialize expenses shoudle be equal 0"
    )
    ok(
      bar.getModel('balance').$get('available') is 0
      "After initialize available resources shoudle be equal 0"
    )

    bar
    .getModel('balance')
    .setData(
        expenses: 1000
        resources: 4000
        available: 3000
      )

    resources = bar.get('el').querySelector('.bar-balance-resources')
    expenses = bar.get('el').querySelector('.bar-balance-expenses')
    equal(resources.innerHTML, '3000 zł',
      'Expenses bar should contain -1000zł')
    equal(expenses.innerHTML, '-1000 zł',
      'Expenses bar should contain -1000zł')
    @
)