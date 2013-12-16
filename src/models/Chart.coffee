app = window.app || {}
app.models = app.models || {}
yamvc = window.yamvc

Chart = yamvc.Model.extend(
  (all...)->
    yamvc.Model.apply(@, all)
    @
)

Chart::init = (all...)->
  yamvc.Model::init.apply(@, all)

Chart::initConfig = (all...)->
  config = @get 'config'
  initOpts = @get 'initOpts'
  #define default data
  initOpts.data =
    type : 'AreaChart'
    title : 'Daily balance'
    isStacked : true
    data : [
      ['Day',   'Balance'],
      ['1',    165],
      ['2',    135],
      ['3',    157],
      ['4',    139],
      ['5',    136],
      ['7',    136],
      ['8',    136],
      ['9',    136],
      ['10',    136],
      ['11',    136],
      ['12',    136],
      ['13',    136],
      ['14',    136],
      ['15',    136],
      ['16',    165],
      ['17',    135],
      ['18',    457],
      ['19',    139],
      ['20',    336],
      ['21',    136],
      ['22',    136],
      ['23',    136],
      ['24',    136],
      ['25',    136],
      ['26',    136],
      ['27',    136],
      ['28',    1936],
      ['29',    2136],
      ['30',    2136],
    ]
  #define model namespace
  config.namespace = 'balance'
  @set 'initOpts', initOpts
  yamvc.Model::initConfig.apply(@, all)

Chart::setRange = (from, to)->

Chart::load = (all...)->

Chart::recaulculate = (all...)->

Chart::all = (all...)->

Chart::getChart = (all...)->


#static
app.models.Chart = Chart

window.app = app