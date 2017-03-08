# Stupid Ethereum Transactions APIs


### WHAT

This is a stupid interface for make ethereum transaction.

Another way to say: etherscan webservices wrapped in a microservice API REST.

### HOW

endpoint                                       | description
-----------------------------------------------|----------------------------------
[/](./docs/home.md)                            | home (testing purpose)
[/v1/transactions](./docs/v1_transactions.md)  | perform transactions
[/v1/balances](./docs/v1_balances.md)  | retrieve `ETHER_ADDRESS_FROM` and `ETHER_ADDRESS_TO` wallet's balance


### CONFIG

ENV to be set:

var name              | description
----------------------|--------------------------------------------------------------------------
NODE_ENV              | production/development, on development will make tx on ropsten network
NODE_PORT             | the service port (default 9000)
NODE_IP               | the expressjs server IP (default 0.0.0.0)
ETHER_ADDRESS_FROM    | the ethereum wallet FROM address
ETHER_ADDRESS_FROM_PK | the wallet private key (for tx sign)
ETHER_ADDRESS_TO      | the ethereum wallet TO address
ETHERSCAN_TOKEN       | the etherscan token ([don't you have one?](https://etherscan.io))


### USAGE

prepare the stuff:

```shell
# Clone the repo
git clone https://github.com/AD2014/seta.git
cd seta

# Configure env-file
cp config-sample.env config.env
vim config.env # edit with your values

```

then you can use the:

- docker way

```shell
# BUILD
docker build -t ad2014/seta .

# RUN
docker run --env-file ./config.env -p 8080:9000 -d ad2014/seta

# TEST
curl -X GET localhost:8080/
```

- development way

```shell
# Launch local service
export $(cat config.env | xargs) && node index.js

# TEST
curl -X GET localhost:9000/
```
