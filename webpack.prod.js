const HtmlWebPackPlugin = require('html-webpack-plugin')
const CssMinimizePlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader, // 3- extract css to the dom
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
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new WorkboxPlugin.GenerateSW(),
    ],
    optimization: {
        minimizer: [
            new CssMinimizePlugin(),
            new TerserPlugin(),
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                minify:{
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true
                }
            })
        ]
    }
}
