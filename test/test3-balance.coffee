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
error = ->
  throw new Error 'Ups... Something goes wrong...'

module("Balance model")
asyncTest(
  "Calculate balance"
  ->
    expect 1
    incomes = new app.models.Income
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
