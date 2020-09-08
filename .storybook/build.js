const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const pkg = require('../package.json')
const path = require('path')

const libraryName = pkg.name

module.exports = {
	entry: path.join(__dirname, "../src/index.js"),
	// entry: path.join(__dirname, '../src/components/Buttons/ButtonGeneric.jsx'),
	target: 'node',
	// mode: 'production',
	mode: 'development',
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'Button.js',
		library: libraryName,
		libraryTarget: 'umd',
		umdNamedDefine: true,
	},
	node: {
		net: 'empty',
		tls: 'empty',
		dns: 'empty'
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				use: {
					loader: 'babel-loader',
					options: {
						babelrc: false,
						presets: [
							[
								'@babel/env',
								{
									modules: false
								}
							],
							'@babel/react'
						],
						plugins: [
							'@loadable/babel-plugin',
							'dynamic-import-node',
							'@babel/plugin-syntax-dynamic-import',
							'@babel/plugin-syntax-import-meta',
							['@babel/plugin-proposal-class-properties', { loose: false }],
							'@babel/plugin-proposal-json-strings'
						]
					}
				}
			},
			{
				test: /\.(gif|ico|jpg|jpeg|png|svg|webp|woff|eot|ttf)$/,
				loader: 'url-loader',
				options: {
					limit: 900000
					// limit: 10,
					// name: "[name][md5:hash].[ext]",
					// outputPath: 'assets/'
				}
			}
		]
	},
	resolve: {
		modules: ['node_modules'],
    extensions: ['.css', '.scss', '.mjs', '.js', '.jsx', '.json', '.gql'],
		alias: {
			react: path.resolve(__dirname, '../node_modules/react'),
			'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
			'@material-ui/core': path.resolve(__dirname, '../node_modules/@material-ui/core')
		}
	},
	plugins: [],
	externals: ['react', 'react-dom', /^@material-ui\/(core|icons)[\/a-zA-Z]*/]
}
