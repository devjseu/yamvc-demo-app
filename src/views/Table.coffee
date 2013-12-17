app = window.app || {}
app.views = app.views || {}
yamvc = window.yamvc

Table = yamvc.View.extend(
  (all...)->
    yamvc.View.apply(@, all)
    @
)

Table::init = (all...)->
  yamvc.View::init.apply(@, all)
  config = @get('config')
  @bindEvents()

Table::initConfig = (all...) ->
  config = @get 'config'
  if !config.headers or config.headers and config.headers.length < 1
    throw new Error('At least one header should be set for table')
  yamvc.View::initConfig.apply @, all
  @bindModelEvents()

Table::bindEvents = ->
  @addListener('render', @initTable.bind(@))

Table::bindModelEvents = ()->
  @getModel('data').addListener('dataDataChange', @redrawTable.bind(@))

Table::initTable = ->
  @getModel('data').load()
  @generateHeaders()

Table::generateHeaders = ()->
  namespace = @getModel('data').getNamespace()
  thead = @queryEl('thead')
  tr = document.createElement('tr')
  tr.setAttribute('class', namespace + '-tr')
  @generateHeader tr, namespace, header for header in @getHeaders()
  thead.appendChild tr


Table::generateHeader = (tr, namespace, header)->
  td = document.createElement('td')
  td.setAttribute('class', namespace + '-td')
  td.innerHTML = header.text
  tr.appendChild(td)

Table::generateRows = ()->
  namespace = @getModel('data').getNamespace()
  headers = @getHeaders()
  tbody = @queryEl('tbody')
  @generateRow tbody, namespace, headers, row for row in @getModel('data').$get('data')



Table::generateRow = (tbody, namespace, headers, row)->
  tr = document.createElement('tr')
  tr.setAttribute('class', namespace + '-tr')
  @generateCell tr, namespace, (if cell.convert then cell.convert(row[cell.dataIndex]) else row[cell.dataIndex]) for a, cell of headers
  tbody.appendChild(tr)

Table::generateCell = (tr, namespace, cell)->
  td = document.createElement('td')
  td.setAttribute('class', namespace + '-td')
  td.innerHTML = cell
  tr.appendChild(td)


Table::redrawTable = ->
  tbody = @queryEl('tbody')
  tbody.innerHTML = ''
  @generateRows()

app.views.Table = Table

window.app = app