const React = require('react')
const PropTypes = require('prop-types')

const EmailBtn = ({
	bgcolor,
	children,
	href,
	outline,
}) =>
	<a
		href={href}
		style={{
			backgroundColor: bgcolor,
			borderColor: (outline ? color : bgcolor),
			borderRadius: '1px',
			borderStyle: 'solid',
			borderWidth: (outline ? '1px' : '8px 20px'),
			cursor: 'pointer',
			display: 'inline-block',
			marginBottom: '12px',
			padding: (outline ? '8px 20px' : '0'),
		}}
	>
		{children}
	</a>

EmailBtn.propTypes = {
	bgcolor: PropTypes.string,
	children: PropTypes.node,
	href: PropTypes.string,
	outline: PropTypes.bool,
}

EmailBtn.defaultProps = {
	outline: false,
}

module.exports = EmailBtn
