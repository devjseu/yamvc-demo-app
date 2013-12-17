#declare namespace
app = window.app || {}
app.views = app.views || {}
yamvc = window.yamvc

#extend basic view
Window = yamvc.View.extend(
  (all...)->
    yamvc.View.apply(@, all)
    @bindEvents();
    @
)

#bind events
Window::bindEvents = ()->
  @addListener('render', @resize.bind(@))
  @addListener('render', @bindClose.bind(@))
  @addListener('render', @bindDOMEvents.bind(@))


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
  yamvc.View::initConfig.apply(@, all)

#close button
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

#bind all interactions with DOM
Window::bindDOMEvents = ()->
  @queryEl('#form-name').addEventListener('keyup',@validateName.bind(@))
  @queryEl('#form-date').addEventListener('keyup',@validateDate.bind(@))
  @queryEl('#form-value').addEventListener('keyup',@validateValue.bind(@))
  @queryEl('.bottom-bar a').addEventListener('click',@processForm.bind(@), false)

#abstract
Window::processForm = () ->

#validate field name
Window::validateName = ()->
  value = @queryEl('#form-name').value
  if value && value.length > 3
    @queryEl('#form-name').setAttribute 'class', ''
  else
    @queryEl('#form-name').setAttribute 'class', 'invalid'

#validate field date
Window::validateDate = ()->
  value = @queryEl('#form-date').value
  if app.logic.Date.parse(value)
    @queryEl('#form-date').setAttribute 'class', ''
  else
    @queryEl('#form-date').setAttribute 'class','invalid'

#validate field value
Window::validateValue = ()->
  value = @queryEl('#form-value').value
  test = /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/
  if test.test(value)
    @queryEl('#form-value').setAttribute 'class', ''
  else
    @queryEl('#form-value').setAttribute 'class','invalid'

#resize window to custom values
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