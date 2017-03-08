'use strict';

var Promise = require('bluebird');
var Web3 = require('web3');

var etherscan_helper = require('./etherscan_helper');
var tx = require('ethereumjs-tx');
var web3 = new Web3();



var tx_helper = (fromAddress, fromPk, toAddress, valueWei, data, testnet) => {

  var api = etherscan_helper.generate(testnet);

  return new Promise( (resolve, reject)=>{
    valueWei = valueWei/1000;
    var amount = web3.toWei(valueWei, 'kwei');
    Promise.all([
      api.proxy.eth_gasPrice(),
      api.proxy.eth_getTransactionCount(fromAddress)
    ]).then( (result) => {
      // chainId - mainnet: 1, ropsten: 3
      let gasLimit = 50000;
      let chainId = (etherscan_helper.ETHERSCAN_CHAIN==='testnet')?3:1
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
