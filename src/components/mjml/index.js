const _ = require('lodash')
const React = require('react')
const { mjml2html } = require('mjml')

require('./reset-password.js')

const mjmlComponents = {
	'reset-password': require('./reset-password.mjml'),
}

module.exports = _.mapValues(
	mjmlComponents,
	mjml => props => {
		const { errors, html } = mjml2html(mjml)
		if (errors.length) {
			console.log('errors', errors)
			throw new Error('mjml2html error', errors)
		}
		return _.template(html)(props)
	}
)