'use strict'

const _ = require('lodash')
const emailRenderer = require('./renderer')

module.exports = {
	init: app => {
		app.get('/bc/reset-password', (req, res) => {
			res.send(
				emailRenderer.render({
					type: 'bc.reset-password',
					data: { firstName: 'rob' },
				})
			)
		})
	}
}