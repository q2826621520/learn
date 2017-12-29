const path = require('path');

module.exports = {
	entry: './app/index.js',
	output: {
	  path: path.resolve(__dirname, 'dist'),
	  filename: 'all.js'
	},
  	module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['env','react'],
	        }
	      }
	    }
	  ]
	},
	watchOptions: {
  aggregateTimeout: 300,
  poll: 1000
},
	watch: true
};