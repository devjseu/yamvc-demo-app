// Generated by CoffeeScript 1.6.3
(function() {
  var Table, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.views = app.views || {};

  yamvc = window.yamvc;

  Table = yamvc.View.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.apply(this, all);
    return this;
  });

  Table.prototype.init = function() {
    var all, config;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.prototype.init.apply(this, all);
    config = this.get('config');
    return this.bindEvents();
  };

  Table.prototype.initConfig = function() {
    var all, config;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    config = this.get('config');
    if (!config.headers || config.headers && config.headers.length < 1) {
      throw new Error('At least one header should be set for table');
    }
    yamvc.View.prototype.initConfig.apply(this, all);
    return this.bindModelEvents();
  };

  Table.prototype.bindEvents = function() {
    return this.addListener('render', this.initTable.bind(this));
  };

  Table.prototype.bindModelEvents = function() {
    return this.getModel('data').addListener('dataDataChange', this.redrawTable.bind(this));
  };

  Table.prototype.initTable = function() {
    this.getModel('data').load();
    return this.generateHeaders();
  };

  Table.prototype.generateHeaders = function() {
    var header, namespace, thead, tr, _i, _len, _ref;
    namespace = this.getModel('data').getNamespace();
    thead = this.queryEl('thead');
    tr = document.createElement('tr');
    tr.setAttribute('class', namespace + '-tr');
    _ref = this.getHeaders();
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      header = _ref[_i];
      this.generateHeader(tr, namespace, header);
    }
    return thead.appendChild(tr);
  };

  Table.prototype.generateHeader = function(tr, namespace, header) {
    var td;
    td = document.createElement('td');
    td.setAttribute('class', namespace + '-td');
    td.innerHTML = header.text;
    return tr.appendChild(td);
  };

  Table.prototype.generateRows = function() {
    var headers, namespace, row, tbody, _i, _len, _ref, _results;
    namespace = this.getModel('data').getNamespace();
    headers = this.getHeaders();
    tbody = this.queryEl('tbody');
    _ref = this.getModel('data').$get('data');
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      row = _ref[_i];
      _results.push(this.generateRow(tbody, namespace, headers, row));
    }
    return _results;
  };

  Table.prototype.generateRow = function(tbody, namespace, headers, row) {
    var a, cell, tr;
    tr = document.createElement('tr');
    tr.setAttribute('class', namespace + '-tr');
    for (a in headers) {
      cell = headers[a];
      this.generateCell(tr, namespace, (cell.convert ? cell.convert(row[cell.dataIndex]) : row[cell.dataIndex]));
    }
    return tbody.appendChild(tr);
  };

  Table.prototype.generateCell = function(tr, namespace, cell) {
    var td;
    td = document.createElement('td');
    td.setAttribute('class', namespace + '-td');
    td.innerHTML = cell;
    return tr.appendChild(td);
  };

  Table.prototype.redrawTable = function() {
    var tbody;
    tbody = this.queryEl('tbody');
    tbody.innerHTML = '';
    return this.generateRows();
  };

  app.views.Table = Table;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Table.map
*/