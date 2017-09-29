const path = require('path')

module.exports = {
	entry: './src/components/index.js',
	target: 'node',
	output: {
		filename: 'component-bundle.js',
		path: path.resolve(__dirname, 'build'),
		libraryTarget: 'commonjs2',
	},
	externals: /^[a-z\-0-9]+$/,
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['env', 'react'],
			},
		}],
	}
}
