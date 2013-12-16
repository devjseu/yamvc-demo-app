app = window.app || {}
app.models = app.models || {}
yamvc = window.yamvc

Incomes = yamvc.Model.extend(
  (all...)->
    yamvc.Model.apply(@, all)
    @
)

Incomes::init = (all...)->
  yamvc.Model::init.apply(@, all)

Incomes::initConfig = (all...)->

  config = @get('config')
  opts = @get('initOpts')
  #define model namespace
  config.namespace = 'incomes'
  #define default value
  opts.data.date = opts.data.date || +new Date
  yamvc.Model::initConfig.apply(@, all)

app.models.Incomes = Incomes

window.app = app