#get namespace
app = window.app || {}
app.views = app.views || {}
app.views.form = app.views.form || {}
yamvc = window.yamvc

#extend class Form
AddExpense = app.views.Form.extend(
  (all...)->
    #call parent constructor
    app.views.Form.apply(@, all)
    @
)

#modify default values
AddExpense::initConfig = (all...)->
  config = @get 'config'
  config.models =
    locale: new yamvc.Model
      config:
        namespace: 'locale'
      data:
        name: 'Name'
        date: 'Date'
        value: 'Value'
        exName: 'e.g Book'
        exDate: 'e.g 23/9/2013'
        exValue: 'e.g 25.50'
    expense: new app.models.Expense
      config:
        namespace: 'expenses'
        proxy: new app.data.proxy.YdnDb
          config:
            db: app.data.db
  app.views.Form::initConfig.apply(@, all)
  @bindModelEvents()

#bind additional events
AddExpense::bindEvents = (all...)->
  app.views.Form::bindEvents.apply(@, all)
  @addListener('render', @addClass.bind(@))

AddExpense::bindModelEvents = ()->
  @getModel('expense').addListener('saved', @afterModelSave.bind(@))

AddExpense::processForm = (e)->
  e.preventDefault();
  test = []
  inputs = @queryEls('form input')
  @validateName()
  @validateDate()
  @validateValue()
  results = {}
  i = 0
  l = inputs.length
  while (i < l)
    test.push 1 if inputs[i].getAttribute('class').search(/invalid/) > -1
    results[inputs[i].name] = inputs[i].value
    i++
  if test.length == 0
    results['date'] = +new Date(app.logic.Date.parse(results['date']))
    @getModel('expense').clear()

    @getModel('expense').setData(results)
    app.mask.show()
    @getModel('expense').save()
  @

AddExpense::afterModelSave = ()->
  @queryEl('form').reset()
  app.mask.hide()
  app.models.balance.load()
  app.models.chart.load()
  @hide()

#add custom class
AddExpense::addClass = ()->
  form = @queryEl 'form'
  form.setAttribute 'class', 'add-expenses'
  form.setAttribute 'data-type', 'add-expenses'

#export
app.views.form.AddExpense = AddExpense

window.app = app