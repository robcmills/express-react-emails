const _ = require('lodash')
const React = require('react')
const ReactDomServer = require('react-dom/server')

const bcEmailComponents = {
	'reset-password': require('./reset-password'),
}

module.exports = _.mapValues(
	bcEmailComponents,
	C => props => ReactDomServer.renderToStaticMarkup(<C {...props} />)
)