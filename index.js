module.exports = function (defaultPort) {
	return app.listen process.env.PORT || process.env.npm_package_config_port || require(process.cwd() + '/package.json').config.port || defaultPort || 3000
}
