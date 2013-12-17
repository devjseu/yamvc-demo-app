// Generated by CoffeeScript 1.6.3
(function() {
  var Layout2, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.views = app.views || {};

  yamvc = window.yamvc;

  Layout2 = yamvc.View.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.apply(this, all);
    return this;
  });

  Layout2.prototype.init = function() {
    var all, config;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.prototype.init.apply(this, all);
    config = this.get('config');
    return config.views = {
      incomes: new app.views.Table({
        config: {
          id: 'table-incomes',
          tpl: 'tpl-table',
          renderTo: '.container',
          models: {
            data: new app.models.Table({
              config: {
                namespace: 'incomes'
              }
            })
          },
          headers: [
            {
              text: 'Id',
              dataIndex: 'id'
            }, {
              text: 'Name',
              dataIndex: 'name'
            }, {
              text: 'Value',
              dataIndex: 'value'
            }, {
              text: 'Date',
              dataIndex: 'date',
              convert: function(value) {
                var d, day, month, year;
                d = new Date(value);
                day = d.getDate();
                month = d.getMonth() + 1;
                year = d.getFullYear();
                return day + '/' + month + '/' + year;
              }
            }
          ]
        }
      }),
      expenses: new app.views.Table({
        config: {
          id: 'table-expenses',
          tpl: 'tpl-table',
          renderTo: '.container',
          models: {
            data: new app.models.Table({
              config: {
                namespace: 'expenses'
              }
            })
          },
          headers: [
            {
              text: 'Id',
              dataIndex: 'id'
            }, {
              text: 'Name',
              dataIndex: 'name'
            }, {
              text: 'Value',
              dataIndex: 'value'
            }, {
              text: 'Date',
              dataIndex: 'date',
              convert: function(value) {
                var d, day, month, year;
                d = new Date(value);
                day = d.getDate();
                month = d.getMonth() + 1;
                year = d.getFullYear();
                return day + '/' + month + '/' + year;
              }
            }
          ]
        }
      }),
      buttonBack: new app.views.Button({
        config: {
          tpl: 'tpl-button',
          renderTo: '.layout-2-action-bar',
          models: {
            locale: new yamvc.Model({
              config: {
                namespace: 'locale'
              },
              data: {
                text: 'Back'
              }
            })
          }
        }
      })
    };
  };

  app.views.Layout2 = Layout2;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Layout2.map
*/
