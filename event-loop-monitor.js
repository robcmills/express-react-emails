'use strict'

const Heavy = require('heavy')
const log = {
	json: args => {
		console.log('Event loop blocked', args)
	}
}

function logIfAboveThreshold({ heavy, logger, name, delayThreshold }) {
	if (!heavy || !heavy.load) {
		return
	}
	if (heavy.load.eventLoopDelay > delayThreshold) {
		logger.json({
			msg: 'Event loop blocked!',
			name,
			delayThreshold,
			eventLoopDelay: `${Math.floor(heavy.load.eventLoopDelay)}ms`,
			heapUsed: `${heavy.load.heapUsed / 1000}MB`,
			rss: `${heavy.load.rss / 1000}MB`,
		})
	}
}

const DEFAULT_DELAY_THRESHOLD = 1000
const DEFAULT_LOG_INTERVAL = 1000
const DEFAULT_SAMPLE_INTERVAL = 1000

const MINIMUM_DELAY_THRESHOLD = 5
const MINIMUM_LOG_INTERVAL = 5
const MINIMUM_SAMPLE_INTERVAL = 5

module.exports = function EventLoopMonitor({
	delayThreshold = DEFAULT_DELAY_THRESHOLD,
	logger = log,
	logInterval = DEFAULT_LOG_INTERVAL,
	name,
	sampleInterval = DEFAULT_SAMPLE_INTERVAL,
} = {}) {
	let badParam
	if (logInterval < MINIMUM_LOG_INTERVAL) {
		badParam = 'logInterval'
	}
	if (sampleInterval < MINIMUM_SAMPLE_INTERVAL) {
		badParam = 'sampleInterval'
	}
	if (delayThreshold < MINIMUM_DELAY_THRESHOLD) {
		badParam = 'delayThreshold'
	}

	if (badParam) {
		throw new Error(`The ${badParam} param passed to event-loop-monitor create is too small`)
	}

	const heavy = new Heavy({ sampleInterval })
	let logIntervalId

	return {
		start: () => {
			heavy.start()

			if (logIntervalId) {
				clearInterval(logIntervalId)
			}

			logIntervalId = setInterval(() => {
				logIfAboveThreshold({
					heavy,
					logger,
					name,
					delayThreshold,
				})
			}, logInterval)
		},
		stop: () => {
			heavy.stop()
			if (logIntervalId) {
				clearInterval(logIntervalId)
			}
		},
	}
}
