app = window.app || {}
app.views = app.views || {}
yamvc = window.yamvc

Chart = yamvc.View.extend(
  (all...)->
    yamvc.View.apply(@, all)
    @
)

Chart::init = (all...)->
  yamvc.View::init.apply(@, all)
  @bindEvents()

Chart::initConfig = (all...) ->
  config = @get('config')
  config.models =
    chart: app.models.chart
  yamvc.View::initConfig.apply(@, all)
  @bindModelEvents()

Chart::bindEvents = ->
  @addListener('render', @initChart.bind(@))

Chart::bindModelEvents = ()->
  @getModel('chart').addListener('dataDataChange', @redrawChart.bind(@))

Chart::redrawChart = ->
  console.log('redraw!')
  @get('chart').draw(
    google.visualization.arrayToDataTable(@getModel('chart').$get('data')
    )
  {
    title: @getModel('chart').$get('title')
    width: @queryEl('.chart-container').offsetWidth
    height: @queryEl('.chart-container').offsetHeight
    vAxis:
      title: @getModel('chart').$get('titlevAxis')
    hAxis:
      title: @getModel('chart').$get('titlehAxis')
  })

Chart::initChart = ->
  chart = new google.visualization[@getModel('chart').$get('type')] @queryEl '.chart-container'
  chart.draw(
    google.visualization.arrayToDataTable(@getModel('chart').$get('data')
    )
  {
    title: @getModel('chart').$get('title')
    width: @queryEl('.chart-container').offsetWidth
    height: @queryEl('.chart-container').offsetHeight
    vAxis:
      title: @getModel('chart').$get('titlevAxis')
    hAxis:
      title: @getModel('chart').$get('titlehAxis')
  })
  @set(
    'chart',
    chart
  )
  @getModel('chart').load()


app.views.Chart = Chart

window.app = app