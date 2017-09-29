const _ = require('lodash')
const React = require('react')
const ReactDomServer = require('react-dom/server')

const bcEmailComponents = {
	'reset-password': require('./reset-password'),
}
const htmlTemplate = require('./html-template')

module.exports = _.mapValues(
	bcEmailComponents,
	C => props => htmlTemplate({
		title: 'BuildingConnected',
		body: ReactDomServer.renderToStaticMarkup(<C {...props} />),
	})
)