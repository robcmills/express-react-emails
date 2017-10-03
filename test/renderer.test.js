const test = require('ava')

const renderer = require('../renderer')

test('bc email renders (without changes)', t => {
	const email = renderer.render({
		type: 'bc.reset-password',
		data: {
			cloudfrontUrl: 'https://s3.amazonaws.com/static.localhost.buildingconnected.com',
			copyrightYear: new Date().getFullYear(),
			userFullName: 'Robert Mills',
			resetUrl: 'http://localhost:3000/_/reset-password?code=3c2c7388-5a3e-45a4-b8a7-0815e2ece6f3',
		},
	})
	t.snapshot(email)
	t.truthy(email)
})

const benchmark = (name, render) => {
	const count = 100
	const start = new Date()
	for (let i=0; i < count; i++) {
		render()
	}
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