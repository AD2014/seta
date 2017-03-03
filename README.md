# Stupid Ethereum Transactions APIs


### WHAT

This is a stupid interface for make ethereum transaction

### HOW

> TODO
> endpoints description


### CONFIG

ENV to be set:

```
NODE_ENV
NODE_PORT
NODE_IP
ETHER_ADDRESS_FROM
ETHER_ADDRESS_FROM_PK
ETHER_ADDRESS_TO
ETHERSCAN_TOKEN
```

### USAGE

```shell
# Clone the repo
git clone https://github.com/AD2014/seta.git
cd seta

# BUILD
docker build -t ad2014/seta .

# RUN
docker run -p 8080:9000 -d ad2014/seta

# TEST
curl -X GET localhost:8080/
```
