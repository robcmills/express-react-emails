const React = require('react')
const PropTypes = require('prop-types')

const EmailBtn = ({
	bgcolor,
	children,
	color,
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
			color,
			cursor: 'pointer',
			display: 'inline-block',
	    fontFamily: 'Helvetica Neue, Helvetica, sans-serif',
			fontWeight: 'bold',
	    lineHeight: '20px',
			marginBottom: '12px',
			padding: (outline ? '8px 20px' : '0'),
			textDecoration: 'none',
		}}
	>
		{children}
	</a>

EmailBtn.propTypes = {
	bgcolor: PropTypes.string,
	children: PropTypes.node,
	color: PropTypes.string,
	href: PropTypes.string,
	outline: PropTypes.bool,
}

EmailBtn.defaultProps = {
	outline: false,
}

module.exports = EmailBtn
