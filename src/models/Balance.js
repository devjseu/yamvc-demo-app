// Generated by CoffeeScript 1.6.3
(function() {
  var Balance, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.models = app.models || {};

  yamvc = window.yamvc;

  Balance = yamvc.Model.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.Model.apply(this, all);
    return this;
  });

  Balance.prototype.init = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return yamvc.Model.prototype.init.apply(this, all);
  };

  Balance.prototype.initConfig = function() {
    var all, config, initOpts;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    config = this.get('config');
    initOpts = this.get('initOpts');
    initOpts.data = {
      resources: 0,
      expenses: 0,
      available: 0,
      month: 1
    };
    config.namespace = 'balance';
    this.set('initOpts', initOpts);
    return yamvc.Model.prototype.initConfig.apply(this, all);
  };

  Balance.prototype.setRange = function(from, to) {
    this.set('from', from);
    return this.set('to', to);
  };

  Balance.prototype.load = function() {
    var all, balance, date, date2, db, func, me, q;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    me = this;
    balance = 0;
    date = new Date();
    date2 = new Date();
    date.setFullYear(2013, 11, 1);
    date2.setFullYear(2014, 1, 1);
    db = app.data.db.getConnection();
    q = db.from('incomes');
    q.where('date', '>=', date.getTime(), '<', date2.getTime()).list().done(function(incomes) {
      var i, l;
      i = 0;
      l = incomes.length;
      while (i < l) {
        balance += parseFloat(incomes[i].value);
        i++;
      }
      return func();
    });
    func = function() {
      var q2;
      q2 = db.from('expenses');
      return q2.where('date', '>=', date.getTime(), '<', date2.getTime()).list().done(function(incomes) {
        var i, l;
        i = 0;
        l = incomes.length;
        while (i < l) {
          balance -= parseFloat(incomes[i].value);
          i++;
        }
        return me.$set('resources', balance);
      });
    };
    return this;
  };

  Balance.prototype.recaulculate = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  };

  Balance.prototype.all = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  };

  Balance.prototype.getBalance = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  };

  app.models.balance = new Balance;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Balance.map
*/
