const React = require('react')

const EmailBody = require('./email-body')

module.exports = ({
	cloudfrontUrl,
	copyrightYear,
	firstName,
}) =>
	<EmailBody cloudfrontUrl={cloudfrontUrl} copyrightYear={copyrightYear}>
		<h2>reset password for {firstName}</h2>
	</EmailBody>