const path = require('path');

module.exports = {
    mode: 'development',
    devtool: "inline-source-map",
    entry: './src/client/client.tsx',
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.tsx?$/,
                exclude: [
                    /node_modules/
                ],
                options: {
                    configFile: 'tsconfig.client.json'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/public')
    }
};