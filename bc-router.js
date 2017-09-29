'use strict'

const _ = require('lodash')
const emailRenderer = require('./renderer')

module.exports = {
	init: app => {
		app.get('/bc/reset-password', (req, res) => {
			res.send(
				emailRenderer.render({
					type: 'bc.reset-password',
					data: {
						cloudfrontUrl: 'https://s3.amazonaws.com/static.localhost.buildingconnected.com',
						copyrightYear: new Date().getFullYear(),
						firstName: 'rob',
					},
				})
			)
		})
	}
}