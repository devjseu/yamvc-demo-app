app = window.app || {}
app.views = app.views || {}
yamvc = window.yamvc

Mask = yamvc.View.extend(
  (all...)->
    yamvc.View.apply(@, all)
    @
)

Mask::show = ()->
  style = @get('el').style
  style.display = 'table'

Mask::hide = ()->
  style = @get('el').style
  style.display = 'none'

app.views.Mask = Mask

window.app = app