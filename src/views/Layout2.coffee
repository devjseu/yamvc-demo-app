app = window.app || {}
app.views = app.views || {}
yamvc = window.yamvc

Layout2 = yamvc.View.extend(
  (all...)->
    yamvc.View.apply(@, all)
    @
)

Layout2::init = (all...)->
  yamvc.View::init.apply(@, all)
  config = @get('config')
  #layout components
  config.views =
  #balance bar
    table: new app.views.Table


app.views.Layout2 = Layout2

window.app = app