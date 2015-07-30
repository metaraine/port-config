var pkg;

try {
  pkg = require(process.cwd() + '/package.json').config.port
}
catch(e) {}

module.exports = function (defaultPort) {
  return process.env.PORT ||
    process.env.npm_package_config_port ||
    pkg ||
    defaultPort ||
    3000
}
