const React = require('react')

const EmailBody = require('../common/email-body')
const EmailCard = require('../common/email-card')
const EmailRow = require('../common/email-row')
const EmailText = require('../common/email-text')
const EmailBtn = require('../common/email-btn')

module.exports = ({
	cloudfrontUrl,
	copyrightYear,
	resetUrl,
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
					href={resetUrl}
				>
					Reset my password 4
				</EmailBtn>
			</EmailRow>
		</EmailCard>
	</EmailBody>
