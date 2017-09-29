const React = require('react')

module.exports = ({ copyrightYear }) =>
	<div>
		<p>
			<a href="http://www.buildingconnected.com">www.buildingconnected.com</a>
			{' | '}
			<a href="mailto:support@buildingconnected.com">support@buildingconnected.com</a>
		</p>
		<p>
			&copy; Copyright
			&nbsp; {copyrightYear} &nbsp;
			BuildingConnected.com. All Rights Reserved.
		</p>
		<p>
			600 California Street, San Francisco, CA 94109
		</p>
	</div>