const React = require('react')

const EmailBody = require('./email-body')
const EmailCard = require('./email-card')
const EmailRow = require('./email-row')
const EmailText = require('./email-text')
const EmailBtn = require('./email-btn')

module.exports = ({
	cloudfrontUrl,
	copyrightYear,
	userFullName,
}) =>
	<EmailBody cloudfrontUrl={cloudfrontUrl} copyrightYear={copyrightYear}>
		<EmailCard>
			<EmailText>Hello <b>{userFullName}</b></EmailText>
			<EmailText>Please use the link below to reset your BuildingConnected password.</EmailText>
			<EmailRow height='20px' />
			<EmailRow align='center'>
				<EmailBtn
					bgcolor='#31708F'
					color='#FFFFFF'
					href='http://localhost:3000/_/reset-password?code=3c2c7388-5a3e-45a4-b8a7-0815e2ece6f3'
				>
						Reset my password
				</EmailBtn>
			</EmailRow>
		</EmailCard>
	</EmailBody>