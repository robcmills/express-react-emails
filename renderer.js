'use strict'

const _ = require('lodash')
const components = require('./build/component-bundle')

module.exports = {
	render: ({ type, data }) => {
		const component = _.get(components, type)
		if (!component) {
			throw new Error(`Could not find component type: ${type}`)
		}
		return component(data)
	},
}