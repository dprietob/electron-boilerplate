'use strict';

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/electron/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'out/electron')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'electron-main',
    node: {
        __dirname: false
    }
};