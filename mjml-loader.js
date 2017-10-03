module.exports = function mjmlLoader(content) {
	this.cacheable()
	return `module.exports = ${JSON.stringify(content)}`
}
