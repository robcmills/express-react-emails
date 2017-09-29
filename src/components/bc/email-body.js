const React = require('react')

const EmailTable = require('./email-table')
const EmailDiv = require('./email-div')
const EmailFooter = require('./email-footer')

module.exports = ({ children, cloudfrontUrl, copyrightYear }) =>
<body style={{
	'-webkit-font-smoothing': 'antialiased',
	'-webkit-text-size-adjust': 'none',
	background: '#F6F6F6',
	direction: 'ltr',
	margin: 0,
	padding: 0,
	minWidth: '100%',
	width: '100% !important',
}}>
	<EmailTable
		style={{
			'-webkit-font-smoothing': 'antialiased',
			'-webkit-text-size-adjust': 'none',
			background: '#F6F6F6',
	}}>
		<tr>
			<td></td>
			<td width='600' align='center'>
				<EmailDiv
					padding='15 10'
					style={{
						height: '100%',
						maxWidth: '600px',
						minWidth: '300px',
					}}
				>
					<EmailTable>
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