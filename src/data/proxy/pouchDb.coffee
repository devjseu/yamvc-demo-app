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
  #todo
  @ 

YdnDb::create = (namespace, data, callback)->
  #todo
  @

YdnDb::update = (namespace, data, callback)->
  #todo
  @

YdnDb::destroy = (namespace, data, callback)->
  #todo
  @

app.data.proxy.YdnDb = YdnDb;
window.app = app