const path = require('path');

module.exports = {

    entry: './src/app.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '')
    },

    devServer: {
        port: 3000,
        compress: true,
        hot: true,
        open: true,
        contentBase: path.resolve(__dirname, '')
    },
    module: {
        rules: [{ test: /\.js$/, use: 'babel-loader' }]
    },
    mode: 'development'
}