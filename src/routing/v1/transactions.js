'use strict';

var transactions = {
  'getAll': (req, res, next)=>{
    res.json({ 'status': 'not implemented' });
    return next();
  },

  'create': (req, res, next)=>{
    if( !req.body.txData ){
      res.status(400).json({'message': 'txData is mandatory'});
      return next();
    }
    var fromAddress = process.env.ETHER_ADDRESS_FROM;
    var fromPk = process.env.ETHER_ADDRESS_FROM_PK;
    var toAddress = process.env.ETHER_ADDRESS_TO;
    let tx_helper = require('../../libs/tx_helper');
    tx_helper(fromAddress, fromPk, toAddress, 1, req.body.txData).then(
      (result)=>{
        res.json(result);
        return next();
      }
    ).catch( function(e) {
      res.status(400).json({ 'message': e.toString() });
      return next();
    });;
  },

  'getOne': (req, res, next)=>{
    res.json({ 'status': 'not implemented' });
    return next();
  }
}

module.exports = transactions;
