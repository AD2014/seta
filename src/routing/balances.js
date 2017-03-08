'use strict';

module.exports = (app) => {
  let balances = require('./v1/balances');

  app.get('/v1/balances', balances.getAll);


};
