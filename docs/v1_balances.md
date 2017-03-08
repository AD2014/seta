# /v1/balances

this endpoint is used to check balances. Verbs are:
- GET: retrieve balances for the wallets

### GET

###### Params

field  | required | description
-------|----------|-----------------
testnet| no       | force the use of `ropsten network` (used when NODE_ENV==='production')


###### Response

- from: ETHER_ADDRESS_FROM wallet's balance in wei
- to: ETHER_ADDRESS_TO wallet's balance in wei


###### Example

```shell
curl -H "Content-Type: application/json" -X POST localhost:9000/v1/balances

## HTTP/1.1 200 Ok
## {
##  "from":"1988284424625016027",
##  "to":"2475725581"
## }
```
---
