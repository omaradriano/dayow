const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        port: 5555,
        // watchFiles: ['src/'],
        static: {
            directory: path.resolve(__dirname, 'dist')
        },

    },
    mode: "development",
    entry: {
        path: path.resolve(__dirname, './src/index.jsx')
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
        ],
    },
    plugins: [
        new htmlwebpackplugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
    ]
}