const path = require('path');

const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/app.ts'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundel.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            // configFileName: 'tsconfig.json',
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }
                ]
            },
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            esModule: true,
                        },
                    },
                    {
                        loader: 'ts-loader',
                    },
                ]
            },
            {
                test: /\.css/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            }
        ]
    },
    // devtool: 'sourse-map cheap-module-source-map',
    plugins: [
        // HotModuleReplacementPlugin
        // CleanWebpackPlugin
        // UnusedWebpackPlugin //'README.md',
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, './src/index.html') }
        ], {}),
    ],
    devtool: 'source-map',
    devServer: {
        compress: true,
        port: 8001
    },
};