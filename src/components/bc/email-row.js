const React = require('react')

module.exports = ({ align, children, height }) =>
	<tr>
		<td align={align} style={{ height }}>
			{children}
		</td>
	</tr>
