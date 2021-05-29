module.exports = {
    entry: './scripts/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },

    devServer: {
        port: 3000,
        compress: true,
        hot: true,
        open: true,
        contentBase: __dirname
    },

    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' }
        ]
    },
    mode: 'development'
}