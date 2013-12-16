app = window.app || {}
app.models = app.models || {}
yamvc = window.yamvc

Expense = yamvc.Model.extend(
  (all...)->
    yamvc.Model.apply(@, all)
    @
)

Expense::init = (all...)->
  yamvc.Model::init.apply(@, all)

Expense::initConfig = (all...)->

  config = @get('config')
  opts = @get('initOpts')
  #define model namespace
  config.namespace = 'expenses'
  #define default value
  opts.data = opts.data || {}
  opts.data.date = opts.data.date || +new Date
  yamvc.Model::initConfig.apply(@, all)

app.models.Expense = Expense

window.app = app