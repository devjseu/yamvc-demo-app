app = window.app || {}
app.data = app.data || {}
yamvc = window.yamvc

Db = yamvc.Core.extend(
  (all...)->
    yamvc.Core.apply(@, all)
    @
)

Db::init = (all...)->
  yamvc.Core::init.apply(@, all)
  opts = all[0] || {};
  config = opts.config || {};
  @set('initOpts', opts)
  @set('config', config)
  @initConfig()
  if not @getName
    throw new Error 'Database name should be set'


Db::connect = ->
  if not @get 'connect'
    @set('connect', new ydn.db.Storage(
      @getName()
      @getSchema()
    ))
  @

Db::close = ->
  @getConnection().close()
  @set 'connect', null
  @

Db::getConnection = ->
  if not @get 'connect'
    @connect()
  @get 'connect'

Db::clear = ()->
  @getConnection().clear()

app.data.Db = Db
window.app = app