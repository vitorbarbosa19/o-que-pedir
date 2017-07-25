const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
	
	entry: ['babel-polyfill', './app/index.js'],
	
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
				query: { 
					plugins: ['transform-async-to-generator'],
					presets: ['env', 'react', 'stage-0'] 
				}
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
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin() //as of Webpack 3.0
		//CONSIDER INCLUDING IN THE FUTURE THE PRODUCTION PLUGINS BELOW:
		//URL-LOADER 
		//since app just uses icons and they are very very small, it might make sense to inline them in the bundle, instead of requesting them
		//https://survivejs.com/webpack/loading/images/
		//SW-PRECACHE-WEBPACK-PLUGIN
		//https://www.npmjs.com/package/sw-precache-webpack-plugin
		//SOURCE-MAP-EXPLORER
		//https://www.npmjs.com/package/source-map-explorer
		//COMPRESSION-WEBPACK-PLUGIN
		//Note that most hosts will already gzip compress your files before serving to the client
		//https://www.npmjs.com/package/compression-webpack-plugin
		//ADVANCED
		//For more advanced plugin configurations, check: https://github.com/petehunt/webpack-howto
	)
}

module.exports = config
