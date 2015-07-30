# port-config
[![npm version](https://img.shields.io/npm/v/port-config.svg)](https://npmjs.org/package/port-config) 

> Get port number from various possible config locations.


## Install

```sh
$ npm install --save port-config
```


## Usage

Looks for a port number defined in these locations:

1. process.env.PORT (such as used on Heroku)
2. process.env.npm_package_config_port (if set in your package.json under config.port)
3. passed argument
4. 3000


```js
var portConfig = require('port-config')

// express app
app.listen(portConfig(), function() {
  console.log('Express server listening on port ' + portConfig())
}
```


## License

ISC © [Raine Lourie](https://github.com/metaraine)
