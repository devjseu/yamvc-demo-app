app = window.app || {}
app.views = app.views || {}
app.views.window = app.views.window || {}
yamvc = window.yamvc

AddIncome = app.views.Window.extend(
  (all...)->
    app.views.Window.apply(@, all)
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
        exDate: 'e.g 23/10/2013'
        exValue: 'e.g 2005.55'
  app.views.Window::initConfig.apply(@, all)

AddIncome::bindEvents = (all...)->
  app.views.Window::bindEvents.apply(@, all)
  @addListener('render', @addClass.bind(@))

AddIncome::addClass = ()->
  form = @queryEl 'form'
  form.setAttribute 'class', 'add-income'
  form.setAttribute 'data-type', 'add-income'

app.views.window.AddIncome = AddIncome

window.app = app