const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
	
	entry: './app/index.js',
	
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.bundle.js',
		publicPath: '/' // React Router configuration
	},
	
	module: {
		rules: [
			{ 
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: { presets: ['env', 'react'] }
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	
	devServer: {
		historyApiFallback: true // React Router configuration
	},

	plugins: [new HtmlWebpackPlugin({ template: './app/index.html' })]
}

if (process.env.NODE_ENV === 'production') {
	config.plugins.push( 
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.optimize.UglifyJsPlugin()
	)
}

module.exports = config
