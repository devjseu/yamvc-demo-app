// Generated by CoffeeScript 1.6.3
(function() {
  var AddIncome, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.views = app.views || {};

  app.views.window = app.views.window || {};

  yamvc = window.yamvc;

  AddIncome = app.views.Window.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    app.views.Window.apply(this, all);
    return this;
  });

  AddIncome.prototype.initConfig = function() {
    var all, config;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    config = this.get('config');
    config.models = {
      locale: new yamvc.Model({
        config: {
          namespace: 'locale'
        },
        data: {
          name: 'Name',
          date: 'Date',
          value: 'Value',
          exName: 'e.g Salary',
          exDate: 'e.g 23/10/2013',
          exValue: 'e.g 2005.55'
        }
      })
    };
    return app.views.Window.prototype.initConfig.apply(this, all);
  };

  AddIncome.prototype.bindEvents = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    app.views.Window.prototype.bindEvents.apply(this, all);
    return this.addListener('render', this.addClass.bind(this));
  };

  AddIncome.prototype.addClass = function() {
    var form;
    form = this.queryEl('form');
    form.setAttribute('class', 'add-income');
    return form.setAttribute('data-type', 'add-income');
  };

  app.views.window.AddIncome = AddIncome;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=AddIncome.map
*/
