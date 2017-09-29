const React = require('react')

module.exports = ({ children, style }) =>
	<table
	  cellPadding={0}
	  cellSpacing={0}
		style={{
		  border: 0,
			margin: 0,
			minWidth: '100%',
			padding: 0,
			width: '100% !important',
			...style,
	}}>
		{children}
	</table>
