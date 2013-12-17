app = window.app || {}
app.views = app.views || {}
yamvc = window.yamvc

Layout2 = yamvc.View.extend(
  (all...)->
    yamvc.View.apply(@, all)
    @
)

Layout2::init = (all...)->
  yamvc.View::init.apply(@, all)
  config = @get('config')
  #layout components
  config.views =
  #balance bar
    incomes: new app.views.Table
      config:
        id: 'table-incomes'
        tpl: 'tpl-table'
        renderTo : '.container'
        models :
          data: new app.models.Table
            config:
              namespace: 'incomes'
        headers: [
          {text: 'Id', dataIndex : 'id'}
          {text: 'Name', dataIndex : 'name'}
          {text: 'Value', dataIndex : 'value'}
          {
            text: 'Date',
            dataIndex : 'date',
            convert : (value)->
              d = new Date(value)
              day = d.getDate()
              month = d.getMonth() + 1
              year = d.getFullYear()
              day+'/'+month+'/'+year
          }
        ]
    expenses: new app.views.Table
      config:
        id: 'table-expenses'
        tpl: 'tpl-table'
        renderTo : '.container'
        models :
          data: new app.models.Table
            config:
              namespace: 'expenses'
        headers: [
          {text: 'Id', dataIndex : 'id'}
          {text: 'Name', dataIndex : 'name'}
          {text: 'Value', dataIndex : 'value'}
          {
            text: 'Date',
            dataIndex : 'date',
            convert : (value)->
              d = new Date(value)
              day = d.getDate()
              month = d.getMonth() + 1
              year = d.getFullYear()
              day+'/'+month+'/'+year
          }
        ]
    buttonBack: new app.views.Button
      config:
        tpl: 'tpl-button'
        renderTo: '.layout-2-action-bar'
        models:
          locale: new yamvc.Model
            config:
              namespace: 'locale'
            data:
              text: 'Back'


app.views.Layout2 = Layout2

window.app = app