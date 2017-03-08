'use strict';
var etherscan_helper = require('../../libs/etherscan_helper');
var Promise = require('bluebird');

var balances = {
  'getAll': (req, res, next)=>{
    let testnet = false;
    if( process.env.NODE_ENV==='production' && req.body.testnet && req.body.testnet===true){
      testnet = true;
    }
    var api = etherscan_helper.generate(testnet);
    var fromAddress = process.env.ETHER_ADDRESS_FROM;
    var toAddress = process.env.ETHER_ADDRESS_TO;
    Promise.all([
      api.account.balance(fromAddress),
      api.account.balance(toAddress)
    ]).then((result)=>{
      res.status(200).json({
        from: result[0].result,
        to: result[1].result
      });
    })
  },

}

module.exports = balances;
