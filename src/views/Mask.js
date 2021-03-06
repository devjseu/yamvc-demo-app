// Generated by CoffeeScript 1.6.3
(function() {
  var Mask, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.views = app.views || {};

  yamvc = window.yamvc;

  Mask = yamvc.View.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.apply(this, all);
    return this;
  });

  Mask.prototype.show = function() {
    var style;
    style = this.get('el').style;
    return style.display = 'table';
  };

  Mask.prototype.hide = function() {
    var style;
    style = this.get('el').style;
    return style.display = 'none';
  };

  app.views.Mask = Mask;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Mask.map
*/
