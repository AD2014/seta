'use strict';
var api = require('etherscan-api');

var etherscan_helper = {
  ETHERSCAN_CHAIN: 'testnet',

  'generate': (testnet=false)=>{
    const ETHERSCAN_TOKEN = process.env.ETHERSCAN_TOKEN;
    var ETHERSCAN_CHAIN = 'testnet';
    if( process.env.NODE_ENV === 'production' && testnet===false){
      etherscan_helper.ETHERSCAN_CHAIN = 'mainnet';
    }
    return api.init(ETHERSCAN_TOKEN, etherscan_helper.ETHERSCAN_CHAIN);
  },

}

module.exports = etherscan_helper;
