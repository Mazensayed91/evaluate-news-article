const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxPlugin = require("workbox-webpack-plugin");
// import regeneratorRuntime from "regenerator-runtime";

module.exports = {
    entry: './src/client/index.js',
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devtool: 'source-map',
    stats: 'minimal',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {

            }
            ,
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // 3- inject css to the dom
                    'css-loader', // 2- css => js
                    'sass-loader' // 1- sass => css
                ]
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        name: 'images/[name].[contenthash].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
         new WorkboxPlugin.GenerateSW(),
    ]
}
