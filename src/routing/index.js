'use strict';

var pkg = require('../../package.json');
var transactions = require('./transactions');

module.exports = (app) => {
  app.get('/', (req, res, next) => {
    res.json({ 'app': pkg.name, 'ver': pkg.version});
    return next();
  });

  transactions(app);

};
