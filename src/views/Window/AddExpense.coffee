app = window.app || {}
app.views = app.views || {}
app.views.window = app.views.window || {}
yamvc = window.yamvc

AddExpense = app.views.Window.extend(
  (all...)->
    app.views.Window.apply(@, all)
    @
)

AddExpense::bindEvents = (all...)->
  app.views.Window::bindEvents.apply(@, all)
  @addListener('render', @addClass.bind(@))

AddExpense::addClass = ()->
  form = @queryEl 'form'
  form.setAttribute 'class', 'add-income'
  form.setAttribute 'data-type', 'add-income
  '
app.views.window.AddExpense = AddExpense

window.app = app