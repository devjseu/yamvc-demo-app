#declare namespace
app = window.app || {}
app.views = app.views || {}
yamvc = window.yamvc

#extend basic view
Form = yamvc.View.extend(
  (all...)->
    yamvc.View.apply(@, all)
    @bindEvents();
    @
)

#bind events
Form::bindEvents = ()->
  @addListener('render', @resize.bind(@))
  @addListener('render', @bindClose.bind(@))
  @addListener('render', @bindDOMEvents.bind(@))


Form::initConfig = (all...)->
  config = @get 'config'
  config.width = config.width || 400
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
Form::bindClose = ()->
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
Form::bindDOMEvents = ()->
  @queryEl('.form-name').addEventListener('keyup',@validateName.bind(@))
  @queryEl('.form-date').addEventListener('keyup',@validateDate.bind(@))
  @queryEl('.form-value').addEventListener('keyup',@validateValue.bind(@))
  @queryEl('.bottom-bar a').addEventListener('click',@processForm.bind(@), false)

#abstract
Form::processForm = () ->

#validate field name
Form::validateName = ()->
  value = @queryEl('.form-name').value
  if value && value.length > 3
    @queryEl('.form-name').setAttribute 'class', 'form-name'
  else
    @queryEl('.form-name').setAttribute 'class', 'form-name invalid'

#validate field date
Form::validateDate = ()->
  value = @queryEl('.form-date').value
  parseDate = app.logic.Date.parse(value)
  if parseDate != null
    @queryEl('.form-date').setAttribute 'class', 'form-date'
  else
    @queryEl('.form-date').setAttribute 'class','form-date invalid'

#validate field value
Form::validateValue = ()->
  value = @queryEl('.form-value').value
  test = /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/
  if test.test(value)
    @queryEl('.form-value').setAttribute 'class', 'form-value'
  else
    @queryEl('.form-value').setAttribute 'class','form-value invalid'

#resize window to custom values
Form::resize = ()->
  style = @queryEl('.window').style
  style.width = @getWidth() + 'px'

Form::show = (all...)->
  yamvc.View::show.apply(this, all)
  style = @get('el').style
  style.display = 'table'

app.views.Form = Form

window.app = app