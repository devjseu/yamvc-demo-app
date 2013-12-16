app.data.db = new app.data.Db
  config:
    name: 'culturalMeTest'
    schema :
      stores: [
          name: 'incomes'
          keyPath: 'id'
          autoIncrement: true
      ]
app.data.db.clear()

#error handler
error = (type, e)->
  console.log(this.getProxy().getResponse());
  throw new Error 'Ups... Something goes wrong...'

module("CRUD")
asyncTest(
  "DB proxy tests - insert single document"
  ->
    expect 1
    incomes = new app.models.Incomes
      config:
        proxy: new app.data.proxy.YdnDb
          config:
            db: app.data.db
    # test writing to db
    saved = (response)->
      ok(
        true if response.id
        "Model created!"
      )
      start()


    #append listeners
    incomes
    .addListener('saved', saved.bind(incomes))
    .addListener('error', error.bind(incomes))

  #perform actions - create
    incomes
    .setData
        name: "Pay rate",
        value: 4000,
        date: +new Date
    incomes.save()


)

asyncTest(
  "DB proxy tests - read single document"
  ->
    expect 1
    #create model
    incomes = new app.models.Incomes
      config:
        proxy: new app.data.proxy.YdnDb
          config:
            db: app.data.db
    # test writing to db
    saved = ()->
      afterSave()

    #append listeners
    incomes
    .addListener('saved', saved.bind(@))
    .addListener('error', error.bind(@))

    #perform actions - create
    incomes
    .setData
        name: "Pay rate",
        value: 4000,
        date: +new Date
    incomes.save()

    #test getting from db
    loaded = (response)->
      ok(
        true if response.id
        "Model loaded!"
      )
      start()

    #callback after create
    afterSave = ->
      incomes2 = new app.models.Incomes
        config:
          proxy: new app.data.proxy.YdnDb
            config:
              db: app.data.db

      incomes2
      .addListener('loaded', loaded.bind(@))
      .addListener('error', error.bind(@))
      #load from db
      incomes2.load {id : incomes.$get 'id'}
)

asyncTest(
  "DB proxy tests - update single document"
  ->
    expect 1
    #create model
    incomes = new app.models.Incomes
      config:
        proxy: new app.data.proxy.YdnDb
          config:
            db: app.data.db


    #callback on create and update
    update = (response, type)->
      if type == 'update'
        ok(
          true
          "Model updated!"
        )
        start()
      else
        #perform actions - update
        incomes
        .setData
            value: 4000
        incomes.save()

    incomes
    .addListener('saved', update.bind(@))
    .addListener('error', error.bind(@))

    #perform actions - create
    incomes
    .setData
        name: "Pay rate",
        value: 4000,
        date: +new Date
    incomes.save()
)


asyncTest(
  "DB proxy tests - destroy single document"
  ->
    expect 1
    #create model
    incomes = new app.models.Incomes
      config:
        proxy: new app.data.proxy.YdnDb
          config:
            db: app.data.db

    #callback on save
    save = ()->
      #perform actions - remove
      incomes.remove()

    #callback on remove
    remove = ()->
      ok(
        true
        "Model removed!"
      )
      start()

    incomes
    .addListener('saved', save.bind(@))
    .addListener('removed', remove.bind(@))
    .addListener('error', error.bind(@))

    #perform actions - create
    incomes
    .setData
        name: "Pay rate",
        value: 4000,
        date: +new Date
    incomes.save()
)
