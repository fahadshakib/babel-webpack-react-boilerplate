const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


module.exports = {

    entry: './src/index.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new ReactRefreshWebpackPlugin() // only in mode: 'development'
    ],

    module: {

        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('autoprefixer')()]
                            }
                        }
                    }
                ]
            },

            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('autoprefixer')()]
                            }
                        }
                    },
                    'sass-loader']
            },

            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'images'
                        }
                    },

                    {
                        loader: 'image-webpack-loader',
                        options: {

                            mozjpeg: {
                                progressive: true,
                                quality: 75 // Set image quality
                            },

                            optipng: {
                                enabled: true, // disbale if u don't want to optimize .png files
                            },

                            pngquant: {
                                quality: [0.65, 0.9],
                                speed: 4
                            },

                            gifsicle: {
                                interlaced: false
                            },

                            svgo: {
                                plugins: [
                                  { removeViewBox: false },
                                  { cleanupIDs: false }
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },


    optimization: {
        minimize: true,
        minimizer: ['...', new CssMinimizerPlugin()]
    },


    mode: 'development', // set mode:'production' for css minification

    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3010,
        hot: true
    }
}