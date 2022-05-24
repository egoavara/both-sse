const path = require('path')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    mode : 'production',
    entry : path.resolve(__dirname, './polyfill/eventsource-polyfill.js'),
    plugins: [
        new NodePolyfillPlugin()
    ],
    output: {
        filename: 'eventsource-polyfill.bundle.js',
        path: path.resolve(__dirname, './polyfill'),
    },
}