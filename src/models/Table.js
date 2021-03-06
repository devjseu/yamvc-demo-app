// Generated by CoffeeScript 1.6.3
(function() {
  var Table, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.models = app.models || {};

  yamvc = window.yamvc;

  Table = yamvc.Model.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.Model.apply(this, all);
    return this;
  });

  Table.prototype.init = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return yamvc.Model.prototype.init.apply(this, all);
  };

  Table.prototype.initConfig = function() {
    var all, config, initOpts;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    config = this.get('config');
    initOpts = this.get('initOpts');
    initOpts.data = {
      data: []
    };
    return yamvc.Model.prototype.initConfig.apply(this, all);
  };

  Table.prototype.setCondition = function() {
    var obj;
    obj = [
      {
        property: 'date',
        conditions: [
          {
            condition: '>',
            value: new Date().getTime() - 30 * 24 * 60 * 60 * 1000
          }, {
            condition: '<',
            value: new Date().getTime()
          }
        ]
      }
    ];
    return this.set('conditions', obj);
  };

  Table.prototype.setOrder = function(property, desc) {
    return this.set('order', {
      property: property,
      desc: desc
    });
  };

  Table.prototype.load = function() {
    var db, me, q;
    me = this;
    this.setCondition();
    this.setOrder('date', true);
    db = app.data.db.getConnection();
    q = db.from(this.getNamespace());
    q = this.addCondition(q);
    q = this.addOrder(q);
    q.list().done(function(records) {
      return me.$set('data', records);
    });
    return this;
  };

  Table.prototype.addCondition = function(q) {
    this.get('conditions').forEach(function(condition) {
      var conditionQuery;
      conditionQuery = [condition.property];
      condition.conditions.forEach(function(_condition) {
        conditionQuery.push(_condition.condition);
        return conditionQuery.push(_condition.value);
      });
      return q.where.apply(q, conditionQuery);
    });
    return q;
  };

  Table.prototype.addOrder = function(q) {
    var order;
    order = this.get('order');
    if (!order.desc) {
      return q.order(order.property);
    } else {
      return q.order(order.property).reverse();
    }
  };

  app.models.Table = Table;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Table.map
*/
