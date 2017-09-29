const React = require('react')

module.exports = ({ children, color, fontWeight, style }) =>
	<p style={{
		color: color || '#4D4D4D',
    fontFamily: 'Helvetica Neue, Helvetica, sans-serif',
    fontWeight,
    lineHeight: '21px',
		...style,
	}}>
		{children}
	</p>
