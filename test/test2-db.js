// Generated by CoffeeScript 1.6.3
(function() {
  var error;

  app.data.db = new app.data.Db({
    config: {
      name: 'yamvcDemoTest',
      schema: {
        stores: [
          {
            name: 'incomes',
            keyPath: 'id',
            autoIncrement: true
          }
        ]
      }
    }
  });

  app.data.db.clear();

  error = function(type, e) {
    console.log(this.getProxy().getResponse());
    throw new Error('Ups... Something goes wrong...');
  };

  module("CRUD");

  asyncTest("DB proxy tests - insert single document", function() {
    var incomes, saved;
    expect(1);
    incomes = new app.models.Income({
      config: {
        proxy: new app.data.proxy.YdnDb({
          config: {
            db: app.data.db
          }
        })
      }
    });
    saved = function(response) {
      ok(response.id ? true : void 0, "Model created!");
      return start();
    };
    incomes.addListener('saved', saved.bind(incomes)).addListener('error', error.bind(incomes));
    incomes.setData({
      name: "Pay rate",
      value: 4000,
      date: +(new Date)
    });
    return incomes.save();
  });

  asyncTest("DB proxy tests - read single document", function() {
    var afterSave, incomes, loaded, saved;
    expect(1);
    incomes = new app.models.Income({
      config: {
        proxy: new app.data.proxy.YdnDb({
          config: {
            db: app.data.db
          }
        })
      }
    });
    saved = function() {
      return afterSave();
    };
    incomes.addListener('saved', saved.bind(this)).addListener('error', error.bind(this));
    incomes.setData({
      name: "Pay rate",
      value: 4000,
      date: +(new Date)
    });
    incomes.save();
    loaded = function(response) {
      ok(response.id ? true : void 0, "Model loaded!");
      return start();
    };
    return afterSave = function() {
      var incomes2;
      incomes2 = new app.models.Income({
        config: {
          proxy: new app.data.proxy.YdnDb({
            config: {
              db: app.data.db
            }
          })
        }
      });
      incomes2.addListener('loaded', loaded.bind(this)).addListener('error', error.bind(this));
      return incomes2.load({
        id: incomes.$get('id')
      });
    };
  });

  asyncTest("DB proxy tests - update single document", function() {
    var incomes, update;
    expect(1);
    incomes = new app.models.Income({
      config: {
        proxy: new app.data.proxy.YdnDb({
          config: {
            db: app.data.db
          }
        })
      }
    });
    update = function(response, type) {
      if (type === 'update') {
        ok(true, "Model updated!");
        return start();
      } else {
        incomes.setData({
          value: 4000
        });
        return incomes.save();
      }
    };
    incomes.addListener('saved', update.bind(this)).addListener('error', error.bind(this));
    incomes.setData({
      name: "Pay rate",
      value: 4000,
      date: +(new Date)
    });
    return incomes.save();
  });

  asyncTest("DB proxy tests - destroy single document", function() {
    var incomes, remove, save;
    expect(1);
    incomes = new app.models.Income({
      config: {
        proxy: new app.data.proxy.YdnDb({
          config: {
            db: app.data.db
          }
        })
      }
    });
    save = function() {
      return incomes.remove();
    };
    remove = function() {
      ok(true, "Model removed!");
      return start();
    };
    incomes.addListener('saved', save.bind(this)).addListener('removed', remove.bind(this)).addListener('error', error.bind(this));
    incomes.setData({
      name: "Pay rate",
      value: 4000,
      date: +(new Date)
    });
    return incomes.save();
  });

}).call(this);

/*
//@ sourceMappingURL=test2-db.map
*/
