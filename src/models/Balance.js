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

  Balance.prototype.setRange = function(from, to) {};

  Balance.prototype.load = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
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
