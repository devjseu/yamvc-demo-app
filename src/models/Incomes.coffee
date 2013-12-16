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
  #define model namespace
  config.namespace = 'incomes'
  yamvc.Model::initConfig.apply(@, all)

app.models.Incomes = Incomes

window.app = app