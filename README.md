# Stupid Ethereum Transactions APIs


### WHAT

This is a stupid interface for make ethereum transaction

### HOW

> TODO
> endpoints description


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

```shell
# Clone the repo
git clone https://github.com/AD2014/seta.git
cd seta

# BUILD
docker build -t ad2014/seta .

# Configure env-file
cp config-sample.env config.env
vim config.env #Adjust values

# RUN
docker run --env-file ./config.env -p 8080:9000 -d ad2014/seta

# TEST
curl -X GET localhost:8080/
```
