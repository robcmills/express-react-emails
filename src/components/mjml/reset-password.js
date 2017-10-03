import React, { Component } from 'react'
import { MJMLElement } from 'mjml-core'
import Container from 'mjml-container'
import Section from 'mjml-section'
import Text from 'mjml-text'
import { registerMJElement } from 'mjml'

@MJMLElement
class ResetPassword extends Component {
	render () {
		const { mjAttribute } = this.props
		return (
			<Container>
				<Section>
					<Text>
						{`Hello ${mjAttribute('firstName')} ${mjAttribute('lastName')}`}
					</Text>
				</Section>
			</Container>
		)
	}
}

ResetPassword.tagName = 'bc-reset-password'
ResetPassword.parentTag = ['mj-body']
// If false, the component can contain MJML; if true, it can contain only plain HTML
ResetPassword.endingTag = false
ResetPassword.defaultMJMLDefinition = {
	content: '',
	attributes: {
		firstName: '',
		lastName: '',
	},
}

registerMJElement(ResetPassword)
export default ResetPassword
