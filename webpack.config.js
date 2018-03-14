const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const dev = process.env.NODE_ENV === "dev"

let config = {
    entry: './app/assets/js/app.js',
    watch: dev,
    output: {
        path: path.resolve('./app/dist'),
        publicPath: "app/dist/",
        filename: 'app.js'
    },
    mode : dev ? "development" : "production",
    devtool : dev ? "cheap-module-eval-source-map" : "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env'
                        ],
                        plugins: [
                            'syntax-dynamic-import'
                        ]
                    }
                },
            },
            { 
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader']
                })
            },
            { 
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                }) 
            },
            {
                test: /\.html$/,
                use: ['raw-loader'] 
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css"),
    ]
}

module.exports = config