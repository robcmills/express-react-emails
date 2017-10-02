const _ = require('lodash')
const React = require('react')
const { mjml2html } = require('mjml')

const mjmlComponents = {
	'reset-password': require('./reset-password.mjml'),
}

module.exports = _.mapValues(
	mjmlComponents,
	mjml => props => _.template(mjml.default)(props)
)