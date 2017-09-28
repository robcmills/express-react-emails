'use strict'

const _ = require('lodash')
const emailComponents = require('./build/component-bundle')

module.exports = {
	init: app => {
		app.get('/bc/reset-password', (req, res) => {
			const resetPassword = _.get(emailComponents, ['bc', 'reset-password'])
			res.send(resetPassword({ firstName: 'rob' }))
		})
	}
}