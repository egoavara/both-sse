const path = require('path')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/sse.ts'),
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    configFile: path.resolve(__dirname, './browser/tsconfig.json'),
                },
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new NodePolyfillPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'sse.js',
        path: path.resolve(__dirname, './browser'),
        library: {
            name: 'bothsse',
            type: 'umd',
        },

    },
}