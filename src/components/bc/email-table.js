const React = require('react')

module.exports = ({ bgcolor, children, style }) =>
	<table
		bgcolor={bgcolor}
		border={0}
		cellPadding={0}
		cellSpacing={0}
		style={{
			borderCollapse: 'collapse',
			borderSpacing: 0,
			minWidth: '100%',
			width: '100%',
			...style,
	}}>
		{children}
	</table>
