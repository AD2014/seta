'use strict';

var pkg = require('../../package.json');
var transactions = require('./transactions');
var balances = require('./balances');

module.exports = (app) => {
  app.get('/', (req, res, next) => {
    res.json({ 'app': pkg.name, 'ver': pkg.version});
    return next();
  });

  transactions(app);
  balances(app);

};
