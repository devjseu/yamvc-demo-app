// Generated by CoffeeScript 1.6.3
(function() {
  var Menu, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.views = app.views || {};

  yamvc = window.yamvc;

  Menu = yamvc.View.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.apply(this, all);
    return this;
  });

  Menu.prototype.init = function() {
    var all, config;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.prototype.init.apply(this, all);
    config = this.get('config');
    return config.views = {
      buttonIncomes: new app.views.Button({
        config: {
          id: 'list-incomes',
          tpl: 'tpl-button',
          renderTo: '.menu-action',
          models: {
            locale: new yamvc.Model({
              config: {
                namespace: 'locale'
              },
              data: {
                text: 'List all incomes'
              }
            })
          }
        }
      }),
      buttonExpenses: new app.views.Button({
        config: {
          id: 'list-expenses',
          tpl: 'tpl-button',
          renderTo: '.menu-action',
          models: {
            locale: new yamvc.Model({
              config: {
                namespace: 'locale'
              },
              data: {
                text: 'List all expenses'
              }
            })
          }
        }
      })
    };
  };

  app.views.Menu = Menu;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Menu.map
*/
