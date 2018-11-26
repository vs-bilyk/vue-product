const path = require('path');

const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundel.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    esModule: true,
                },
            },
            {
                test: /.js$/,
                use: 'babel-loader'
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
};