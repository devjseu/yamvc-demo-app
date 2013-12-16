app = window.app || {}
app.models = app.models || {}
yamvc = window.yamvc

Balance = yamvc.Model.extend(
  (all...)->
    yamvc.Model.apply(@, all)
    @
)

Balance::init = (all...)->
  yamvc.Model::init.apply(@, all)

Balance::initConfig = (all...)->
  config = @get 'config'
  initOpts = @get 'initOpts'
  #define default data
  initOpts.data =
    resources: 0
    expenses: 0
    available: 0
    month: 1
  #define model namespace
  config.namespace = 'balance'
  @set 'initOpts', initOpts
  yamvc.Model::initConfig.apply(@, all)

Balance::setRange = (from, to)->

Balance::load = (all...)->

Balance::recaulculate = (all...)->

Balance::all = (all...)->

Balance::getBalance = (all...)->


#static
app.models.balance = new Balance

window.app = app