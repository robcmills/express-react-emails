const React = require('react')

const EmailDiv = require('./email-div')

module.exports = ({ children }) =>
	<EmailDiv
		bgcolor='#FFFFFF'
		margin='0 0 15'
		padding='15'
		style={{
			borderColor: '#E0E0E0',
			borderStyle: 'solid',
			borderWidth: '1px',
		}}
	>
		{children}
	</EmailDiv>