// Generated by CoffeeScript 1.6.3
(function() {
  var Button, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.views = app.views || {};

  yamvc = window.yamvc;

  Button = yamvc.View.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.apply(this, all);
    return this;
  });

  app.views.Button = Button;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Button.map
*/