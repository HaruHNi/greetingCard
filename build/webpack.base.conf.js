module.exports = {
    entry: {
        app: [
            './src/app.js',
            './src/styles/app.scss'
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}