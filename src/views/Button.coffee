app = window.app || {}
app.views = app.views || {}
yamvc = window.yamvc

Button = yamvc.View.extend(
  (all...)->
    yamvc.View.apply(this, all)
    this
)

app.views.Button = Button

window.app = app