const _ = require('lodash')
const React = require('react')
const { mjml2html } = require('mjml')

const mjmlComponents = {
	'reset-password': require('./reset-password.js'),
}

module.exports = _.mapValues(
	mjmlComponents,
	C => props => {
		const { errors, html } = mjml2html(C)
		if (errors && errors.length) {
			throw new Error('mjml render error', errors)
		}
		return html
	}
)