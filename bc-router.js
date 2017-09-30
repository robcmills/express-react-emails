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
						userFullName: 'Robert Mills',
						resetUrl: 'http://localhost:3000/_/reset-password?code=3c2c7388-5a3e-45a4-b8a7-0815e2ece6f3',
					},
				})
			)
		})
	}
}