'use strict';

module.exports = (app) => {
  let transactions = require('./v1/transactions');

  app.get('/v1/transactions', transactions.getAll);
  app.post('/v1/transactions', transactions.create);
  
  app.get('/v1/transactions/:txId', transactions.getOne);

};
