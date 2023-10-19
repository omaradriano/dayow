const path = require('path')

module.exports = {
    devServer: {
        port: 5555,
        watchFiles: ['src/']
    },
    mode: "development",
    entry: {
        path: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-react',
                            {
                                runtime: 'automatic'
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    }
}