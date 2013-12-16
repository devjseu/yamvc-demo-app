#get namespace
app = window.app || {}
app.views = app.views || {}
app.views.window = app.views.window || {}
yamvc = window.yamvc

#extend class Window
AddExpense = app.views.Window.extend(
  (all...)->
    #call parent constructor
    app.views.Window.apply(@, all)
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
        exDate: 'e.g 23/12/2013'
        exValue: 'e.g 25.50'
  app.views.Window::initConfig.apply(@, all)

#bind additional events
AddExpense::bindEvents = (all...)->
  app.views.Window::bindEvents.apply(@, all)
  @addListener('render', @addClass.bind(@))

#add custom class
AddExpense::addClass = ()->
  form = @queryEl 'form'
  form.setAttribute 'class', 'add-expenses'
  form.setAttribute 'data-type', 'add-expenses'

#export
app.views.window.AddExpense = AddExpense

window.app = app