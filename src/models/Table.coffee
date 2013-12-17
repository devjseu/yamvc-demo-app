app = window.app || {}
app.models = app.models || {}
yamvc = window.yamvc

Table = yamvc.Model.extend(
  (all...)->
    yamvc.Model.apply(@, all)
    @
)

Table::init = (all...)->
  yamvc.Model::init.apply(@, all)

Table::initConfig = (all...)->
  config = @get 'config'
  initOpts = @get 'initOpts'
  #define default data
  initOpts.data =
    data: [
    ]
  yamvc.Model::initConfig.apply(@, all)

Table::setCondition = ()->
  obj = [
    {
      property: 'date',
      conditions: [
        {
          condition: '>',
          value: new Date().getTime() - 30 * 24 * 60 * 60 * 1000
        },
        {
          condition: '<',
          value: new Date().getTime()
        }
      ]
    }
  ]
  @set 'conditions', obj

Table::setOrder = (property, desc)->
  @set 'order', {property: property, desc: desc}

Table::load = ()->
  me = @
  @setCondition()
  @setOrder('date', true)
  db = app.data.db.getConnection()
  q = db.from(@getNamespace())
  q = @addCondition(q)
  q = @addOrder(q)
  q.list()
  .done(
      (records)->
        me.$set 'data', records
    )
  @

Table::addCondition = (q)->
  @get('conditions').forEach (condition) ->
    conditionQuery = [
      condition.property
    ]
    condition.conditions.forEach (_condition) ->
      conditionQuery.push(_condition.condition)
      conditionQuery.push(_condition.value)
    q.where.apply(q, conditionQuery)
  q

Table::addOrder = (q)->
  order = @get 'order'
  if(!order.desc)
    q.order(order.property)
  else
    q.order(order.property).reverse()


#static
app.models.Table = Table

window.app = app