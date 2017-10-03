const test = require('ava')

const renderer = require('./renderer')
const monitor = new require('./event-loop-monitor')({
	name: 'emails',
})

test('bc email renders', t => {
	const copyrightYear = new Date().getFullYear()
	const email = renderer.render({
		type: 'bc.reset-password',
		data: {
			cloudfrontUrl: 'https://s3.amazonaws.com/static.localhost.buildingconnected.com',
			copyrightYear,
			userFullName: 'Robert Mills',
			resetUrl: 'http://localhost:3000/_/reset-password?code=3c2c7388-5a3e-45a4-b8a7-0815e2ece6f3',
		},
	})
	t.truthy(email)
})

const benchmark = (name, render) => {
	const count = 1000

	const start = new Date()
	monitor.start()
	for (let i=0; i < count; i++) {
		render()
	}
	monitor.stop()
	const finish = new Date()
	const elapsed = finish - start
	console.log(`Rendered ${count} ${name} in ${elapsed} ms`)
	console.log(`Average ${elapsed / count}`)
}

test('bc email benchmark', t => {
	benchmark('bc emails', () => {
		renderer.render({
			type: 'bc.reset-password',
			data: {
				cloudfrontUrl: 'https://s3.amazonaws.com/static.localhost.buildingconnected.com',
				copyrightYear: new Date().getFullYear(),
				userFullName: 'Robert Mills',
				resetUrl: 'http://localhost:3000/_/reset-password?code=3c2c7388-5a3e-45a4-b8a7-0815e2ece6f3',
			},
		})
	})
	t.pass()
})

test('mjml email benchmark', t => {
	benchmark('mjml emails', () => {
		renderer.render({
			type: 'mjml.reset-password',
			data: { user: { firstName: 'Robert', lastName: 'Mills' } },
		})
	})
	t.pass()
})