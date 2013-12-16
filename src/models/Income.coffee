app = window.app || {}
app.models = app.models || {}
yamvc = window.yamvc

Income = yamvc.Model.extend(
  (all...)->
    yamvc.Model.apply(@, all)
    @
)

Income::init = (all...)->
  yamvc.Model::init.apply(@, all)

Income::initConfig = (all...)->

  config = @get('config')
  opts = @get('initOpts')
  #define model namespace
  config.namespace = 'incomes'
  #define default value
  opts.data = opts.data || {}
  opts.data.date = opts.data.date || +new Date
  yamvc.Model::initConfig.apply(@, all)

app.models.Income = Income

window.app = app