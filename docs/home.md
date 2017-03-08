# /

A kind of `Home page`, it just return infos, I use this to check the service is running.

### GET

###### Params

none

###### Response

- app: service name
- ver: version number

###### Example

```shell
curl -H "Content-Type: application/json" -X GET localhost:9000

## HTTP/1.1 200 OK
## {
##   "app":"seta",
##   "ver":"0.0.1"
## }
```
---
