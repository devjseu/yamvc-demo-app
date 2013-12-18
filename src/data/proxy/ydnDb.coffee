#declare namespace
app = window.app || {}
app.data = app.data || {}
app.data.proxy = app.data.proxy || {}
yamvc = window.yamvc

YdnDb = yamvc.Core.extend(
  (all...)->
    yamvc.Core.apply(@, all)
    @
)

YdnDb::init = (all...)->
  opts = all[0] || {}
  config = opts.config || {}
  config.idProperty = 'id'
  @set 'initOpts', opts
  @set 'config', config
  @initConfig()
  @

YdnDb::getStatus = ->
  @get 'status'

YdnDb::getResponse = ->
  @get 'response'

YdnDb::read = (namespace, data, callback)->
  idProperty = @getIdProperty()
  if typeof data[idProperty] == 'object'
    console.log idProperty

  $set = @set.bind(@)
  req = @getDb()
  .getConnection()
  .get(
      namespace,
      data[idProperty]
    )
  req.done(
    (key)->
      $set('status', 'success')
      data[idProperty] = key
      $set('response', data)
      callback()
  )
  req.fail(
    (e)->
      $set('status', 'error')
      $set('response', e)
      callback()
  )
  @

YdnDb::create = (namespace, data, callback)->
  $set = @set.bind(@)
  idProperty = @getIdProperty()
  req = @getDb()
  .getConnection()
  .put(
      name: namespace
      keyPath: idProperty
      data
    )
  req.done(
    (key)->
      $set('status', 'success')
      data[idProperty] = key
      $set('response', data)
      callback()
  )
  req.fail(
    (e)->
      console.log e
      $set('status', 'error')
      $set('response', e)
      callback()
  )
  @

YdnDb::update = (namespace, data, callback)->
  $set = @set.bind(@)
  req = @getDb()
  .getConnection()
  .put(
      namespace
      data
    )
  req.done(
    ()->
      $set('status', 'success')
      $set('response', data)
      callback()
  )
  req.fail(
    (e)->
      $set('status', 'error')
      $set('response', e)
      callback()
  )
  @

YdnDb::destroy = (namespace, data, callback)->
  idProperty = @getIdProperty()
  $set = @set.bind(@)
  req = @getDb()
  .getConnection()
  .remove(
      namespace,
      data[idProperty]
    )
  req.done(
    ()->
      $set('status', 'success')
      $set('response', {})
      callback()
  )
  req.fail(
    (e)->
      $set('status', 'error')
      $set('response', e)
      callback()
  )
  @

app.data.proxy.YdnDb = YdnDb;
window.app = app