app = window.app || {}
app.views = app.views || {}
app.views.window = app.views.window || {}
yamvc = window.yamvc

AddIncome = app.views.Window.extend(
  (all...)->
    app.views.Window.apply(@, all)
    @
)

AddIncome::bindEvents = (all...)->
  app.views.Window::bindEvents.apply(@, all)
  @addListener('render', @addClass.bind(@))

AddIncome::addClass = ()->
  form = @queryEl 'form'
  form.setAttribute 'class', 'add-income'
  form.setAttribute 'data-type', 'add-income
'
app.views.window.AddIncome = AddIncome

window.app = app