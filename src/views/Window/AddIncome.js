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
          exDate: 'e.g 23/3/2013',
          exValue: 'e.g 2005.55'
        }
      }),
      income: new app.models.Income({
        config: {
          namespace: 'incomes',
          proxy: new app.data.proxy.YdnDb({
            config: {
              db: app.data.db
            }
          })
        }
      })
    };
    app.views.Window.prototype.initConfig.apply(this, all);
    return this.bindModelEvents();
  };

  AddIncome.prototype.bindEvents = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    app.views.Window.prototype.bindEvents.apply(this, all);
    return this.addListener('render', this.addClass.bind(this));
  };

  AddIncome.prototype.bindModelEvents = function() {
    return this.getModel('income').addListener('saved', this.afterModelSave.bind(this));
  };

  AddIncome.prototype.processForm = function() {
    var i, inputs, l, results, test;
    test = [];
    inputs = this.queryEls('form input');
    this.validateName();
    this.validateDate();
    this.validateValue();
    results = {};
    i = 0;
    l = inputs.length;
    while (i < l) {
      if (inputs[i].getAttribute('class').search(/invalid/) > -1) {
        test.push(1);
      }
      results[inputs[i].name] = inputs[i].value;
      i++;
    }
    if (test.length === 0) {
      results['date'] = +new Date(this.parseDate(results['date']));
      this.getModel('income').setData(results);
      app.mask.show();
      this.getModel('income').save();
    }
    return this;
  };

  AddIncome.prototype.afterModelSave = function() {
    this.queryEl('form').reset();
    app.mask.hide();
    app.models.balance.load();
    return this.hide();
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
