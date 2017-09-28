## express-react-emails

Proof of concept and stage for experimentation with React email components rendered server-side at run-time.

The goal is an api like this:

```javascript
// server/emails/mailer.js

const BcEmailComponents = require('bc/email-components')

const name = 'reset-password'
const data = {
	firstName: 'Robert',
	lastName: 'Mills'
}
const props = [optional]

const emailString = BcEmailComponents.render({ name, data, props })
// this emailString contains everything needed to send email, including correct doctype, headers, body styling and email-client-friendly html.
```
