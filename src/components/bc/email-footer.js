const React = require('react')

const EmailText = require('./email-text')
const EmailRow = require('./email-row')

const SmallText = ({ children }) =>
	<EmailText style={{ fontSize: '12px' }}>{children}</EmailText>

module.exports = ({ copyrightYear }) =>
	<EmailRow align='center'>
		<SmallText style={{ fontSize: '12px' }}>
			<a href="http://www.buildingconnected.com">www.buildingconnected.com</a>
			{' | '}
			<a href="mailto:support@buildingconnected.com">support@buildingconnected.com</a>
		</SmallText>
		<SmallText>
			{`© Copyright ${copyrightYear} BuildingConnected.com. All Rights Reserved.`}
		</SmallText>
		<SmallText>
			600 California Street, San Francisco, CA 94109
		</SmallText>
	</EmailRow>