import HtmlWebpackPlugin from "html-webpack-plugin";
import HtmlWebpackInlineSourcePlugin from "html-webpack-inline-source-plugin";

module.exports = {
	// Your main js file
	entry: "./src/js/app.js",
	// Production set up
	output: {
		path: "dist",
		filename: "bundle.min.js"
	},

	module: {
		loaders: [
			{
				// Finds all .js files in project
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: "babel"
			},
			{
				test: /\.scss?$/,
				loader: "style-loader!css-loader!sass-loader"
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			minify: { collapseWhitespace: true },
			// Write all your html in this file
			template: "./src/index.ejs",
			inlineSource: ".(js|css)$"
		}),
		new HtmlWebpackInlineSourcePlugin()
	],

	node: false,
	devtool: "source-map",

	devServer: {
		// Set a port number to your liking
		port: process.env.PORT || 8666,
		contentBase: "./src",
		historyApiFallback: true
	}
};
