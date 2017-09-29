const React = require('react')

const EmailTable = require('./email-table')
const EmailDiv = require('./email-div')
const EmailFooter = require('./email-footer')

module.exports = ({ children, cloudfrontUrl, copyrightYear }) =>
<body style={{
	background: '#F6F6F6',
	height: '100% !important',
	margin: 0,
	padding: 0,
	WebkitFontSmoothing: 'antialiased',
	WebkitTextSizeAdjust: 'none',
	width: '100% !important',
}}>
	<EmailTable
		style={{
			WebkitFontSmoothing: 'antialiased',
			WebkitTextSizeAdjust: 'none',
			background: '#F6F6F6',
		}}
	>
		<tr>
			<td></td>
			<td width='600' align='center'>
				<EmailDiv padding='15 10'>
					<EmailTable style={{
						maxWidth: '600px',
						minWidth: '300px',
						width: '600px',
					}}>
						<tr>
							<td>
								<img
									align='left'
									alt='BuildingConnected'
									height='28'
									src={`${cloudfrontUrl}/email/bc-logo.png`}
									width='240'
								/>
							</td>
						</tr>
						<tr>
							<td height='10'></td>
						</tr>
						<tr>
							<td>
								{children}
							</td>
						</tr>
						<tr>
							<td height='10'></td>
						</tr>
						<tr>
							<td>
								<EmailFooter copyrightYear={copyrightYear} />
							</td>
						</tr>
					</EmailTable>
				</EmailDiv>
			</td>
			<td></td>
		</tr>
	</EmailTable>
</body>