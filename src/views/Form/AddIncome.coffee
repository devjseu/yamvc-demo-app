app = window.app || {}
app.views = app.views || {}
app.views.form = app.views.form || {}
yamvc = window.yamvc

AddIncome = app.views.Form.extend(
  (all...)->
    app.views.Form.apply(@, all)
    @
)

AddIncome::initConfig = (all...)->
  config = @get 'config'
  config.models =
    locale: new yamvc.Model
      config:
        namespace: 'locale'
      data:
        name: 'Name'
        date: 'Date'
        value: 'Value'
        exName: 'e.g Salary'
        exDate: 'e.g 23/3/2013'
        exValue: 'e.g 2005.55'
    income: new app.models.Income
      config:
        namespace: 'incomes'
        proxy: new app.data.proxy.YdnDb
          config:
            db: app.data.db

  app.views.Form::initConfig.apply(@, all)
  @bindModelEvents()

AddIncome::bindEvents = (all...)->
  app.views.Form::bindEvents.apply(@, all)
  @addListener('render', @addClass.bind(@))

AddIncome::bindModelEvents = ()->
  @getModel('income').addListener('saved', @afterModelSave.bind(@))

AddIncome::processForm = (e)->
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
    @getModel('income').clear()
    @getModel('income').setData(results)
    app.mask.show()
    @getModel('income').save()
  @

AddIncome::afterModelSave = ()->
  @queryEl('form').reset()
  app.mask.hide()
  app.models.balance.load()
  app.models.chart.load()
  @hide()

AddIncome::addClass = ()->
  form = @queryEl 'form'
  form.setAttribute 'class', 'add-income'
  form.setAttribute 'data-type', 'add-income'

app.views.form.AddIncome = AddIncome

window.app = app