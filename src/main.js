// Generated by CoffeeScript 1.6.3
(function() {
  var app, yamvc;

  app = window.app || {};

  yamvc = window.yamvc;

  app.init = function() {
    app.data.db = new app.data.Db({
      config: {
        name: 'culturalMe',
        schema: {
          stores: [
            {
              name: 'incomes',
              keyPath: 'id',
              autoIncrement: true,
              indexes: [
                {
                  keyPath: 'date'
                }
              ]
            }, {
              name: 'expenses',
              keyPath: 'id',
              autoIncrement: true,
              indexes: [
                {
                  keyPath: 'date'
                }
              ]
            }
          ]
        }
      }
    });
    app.views.layout = new app.views.Layout({
      config: {
        id: 'layout',
        tpl: 'tpl-layout',
        renderTo: '#container'
      }
    });
    app.views.layout2 = new app.views.Layout2({
      config: {
        id: 'layout-2',
        tpl: 'tpl-layout-2',
        renderTo: '#container'
      }
    });
    app.views.income = new app.views.form.AddIncome({
      config: {
        id: 'add-income',
        tpl: 'tpl-window',
        renderTo: 'body'
      }
    });
    app.views.income.render();
    app.views.expense = new app.views.form.AddExpense({
      config: {
        id: 'add-expense',
        tpl: 'tpl-window',
        renderTo: 'body'
      }
    });
    app.views.expense.render();
    app.controlles = {
      main: new yamvc.Controller({
        config: {
          name: 'Main',
          views: {
            "layout": app.views.layout,
            "layout-2": app.views.layout2
          },
          routes: {
            "": 'home',
            "show-expenses": 'showExpenses',
            "show-incomes": 'showIncomes'
          },
          events: {
            "$layout": {
              render: function() {
                app.models.balance.load();
                return setTimeout(function() {
                  return app.mask.hide();
                }, 500);
              },
              show: function() {
                return setTimeout(function() {
                  return app.mask.hide();
                }, 500);
              }
            },
            "$layout-2": {
              render: function() {
                console.log('test');
                return setTimeout(function() {
                  return app.mask.hide();
                }, 500);
              },
              show: function() {
                return setTimeout(function() {
                  return app.mask.hide();
                }, 500);
              }
            },
            '.add-expense a': {
              click: function(view, e) {
                e.preventDefault();
                return this.onExpenseBtnClick();
              }
            },
            '.add-income a': {
              click: function(view, e) {
                e.preventDefault();
                return this.onIncomeBtnClick();
              }
            },
            '.layout-2-action-bar .button': {
              click: function(view, e) {
                e.preventDefault();
                return this.onBackBtnClick();
              }
            },
            '[yamvc-id="list-incomes"] a': {
              click: function(view, e) {
                e.preventDefault();
                return this.onListIncomesBtnClick();
              }
            },
            '[yamvc-id="list-expenses"] a': {
              click: function(view, e) {
                e.preventDefault();
                return this.onListExpensesBtnClick();
              }
            }
          }
        },
        onBackBtnClick: function() {
          return this.redirectTo('');
        },
        onExpenseBtnClick: function() {
          return yamvc.ViewManager.get('add-expense').show();
        },
        onIncomeBtnClick: function() {
          return yamvc.ViewManager.get('add-income').show();
        },
        onListIncomesBtnClick: function() {
          app.mask.show();
          return this.redirectTo('show-incomes');
        },
        onListExpensesBtnClick: function() {
          app.mask.show();
          return this.redirectTo('show-expenses');
        },
        home: function() {
          app.views.layout2.hide();
          if (app.views.layout.isInDOM()) {
            return app.views.layout.show();
          } else {
            return app.views.layout.render();
          }
        },
        showExpenses: function() {
          app.views.layout.hide();
          if (app.views.layout2.isInDOM()) {
            app.views.layout2.show();
          } else {
            app.views.layout2.render();
          }
          app.views.layout2.getChild('incomes').hide();
          return app.views.layout2.getChild('expenses').show();
        },
        showIncomes: function() {
          app.views.layout.hide();
          if (app.views.layout2.isInDOM()) {
            app.views.layout2.show();
          } else {
            app.views.layout2.render();
          }
          app.views.layout2.getChild('incomes').show();
          return app.views.layout2.getChild('expenses').hide();
        }
      })
    };
    return this;
  };

  window.app = app;

  yamvc.onReady(app.init);

}).call(this);

/*
//@ sourceMappingURL=main.map
*/
