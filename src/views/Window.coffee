app = window.app || {}
app.views = app.views || {}
yamvc = window.yamvc

Window = yamvc.View.extend(
  (all...)->
    yamvc.View.apply(@, all)
    @bindEvents();
    @
)

Window::bindEvents = ()->
  @addListener('render', @resize.bind(@))
  @addListener('render', @bindClose.bind(@))

Window::initConfig = (all...)->
  config = @get 'config'
  config.width = config.width || 400
  config.height = config.height || 300
  config.views = config.views || {}
  config.views.close = new app.views.Button
    config:
      tpl: 'tpl-button'
      renderTo: '.top-bar'
      models:
        locale: new yamvc.Model
          config:
            namespace: 'locale'
          data:
            text: 'X'

  config = @get 'config'
  config.height = 200
  config.views = config.views || {}
  config.views.add = new app.views.Button
    config:
      tpl: 'tpl-button'
      renderTo: '.bottom-bar'
      models:
        locale: new yamvc.Model
          config:
            namespace: 'locale'
          data:
            text: 'Add'
  config.models =
    locale: new yamvc.Model
      config:
        namespace: 'locale'
      data:
        name: 'Name'
        date: 'Date'
        value: 'Value'
        exName: 'e.g Salary'
        exDate: 'e.g 23/10/2019'
        exValue: 'e.g 2005.78'
  yamvc.View::initConfig.apply(@, all)

Window::bindClose = ()->
  me = @
  @queryEl('a').addEventListener(
    'click',
  (e)->
    e.preventDefault()
    me.hide()
    @
  true
  )


Window::resize = ()->
  style = @queryEl('.window-vertical-center').style
  style.width = @getWidth() + 'px'
  style.height = @getHeight() + 'px'

Window::show = ()->
  style = @get('el').style
  style.display = 'table'

Window::hide = ()->
  style = @get('el').style
  style.display = 'none'

app.views.Window = Window

window.app = app