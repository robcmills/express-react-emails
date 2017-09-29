'use strict'

const _ = require('lodash')
const emailRenderer = require('./renderer')

module.exports = {
	init: app => {
		app.get('/mjml/reset-password', (req, res) => {
			res.send(
				emailRenderer.render({
					type: 'mjml.reset-password',
					data: { firstName: 'rob' },
				})
			)
		})
	}
}