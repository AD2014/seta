'use strict';

var Promise = require('bluebird');
var Web3 = require('web3');
var api = require('etherscan-api');
var tx = require('ethereumjs-tx');
var web3 = new Web3();

const ETHERSCAN_TOKEN = process.env.ETHERSCAN_TOKEN;
var ETHERSCAN_CHAIN = 'testnet';

var tx_helper = (fromAddress, fromPk, toAddress, valueWei, data, testnet) => {
  if( process.env.NODE_ENV === 'production' && testnet===false){
    ETHERSCAN_CHAIN = 'mainnet';
  }

  api = api.init(ETHERSCAN_TOKEN, ETHERSCAN_CHAIN);

  return new Promise( (resolve, reject)=>{
    valueWei = valueWei/1000;
    var amount = web3.toWei(valueWei, 'kwei');
    Promise.all([
      api.proxy.eth_gasPrice(),
      api.proxy.eth_getTransactionCount(fromAddress)
    ]).then( (result) => {
      // chainId - mainnet: 1, ropsten: 3
      let gasLimit = 50000;
      let chainId = (ETHERSCAN_CHAIN==='testnet')?3:1
      let gasPrice = result[0].result;
      let nonce = result[1].result;
      let rawTx = {
        nonce: nonce.toString(),
        chainId: chainId,
        gasPrice: gasPrice,
        gasLimit: gasLimit,
        to: toAddress,
        from: fromAddress,
        value: amount,
        data: data
      }


      let transaction = new tx(rawTx);
      transaction.sign( new Buffer(fromPk, 'hex') );
      let serializedTx = '0x'+transaction.serialize().toString('hex');
      api.proxy.eth_sendRawTransaction(serializedTx).then( (result)=>{
        if( result.error ){
          reject({
            error: result.error.message
          });
        } else {
          resolve({
            tx: result.result
          });
        }
      });
    });
  });
}

module.exports = tx_helper;
