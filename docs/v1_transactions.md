# /v1/transactions

this is the endpoint for making transactions. Verbs are:
- POST: make a tx

### POST

###### Params

field  | required | description
-------|----------|-----------------
txData | yes      | data to be stored in tx
testnet| no       | force the use of `ropsten network` (used when NODE_ENV==='production')

###### Response

- tx: transaction ID

###### Example

```shell
curl -H "Content-Type: application/json" -X POST localhost:9000/v1/transactions -d '{"txData":"some data for the bc"}'

## HTTP/1.1 201 Created
## {
##   "tx":"0x8e21d1ecac8313f9e44acc727c4bdaf996c31df9781133ef68461546b74ee372"
## }
```
---
