const webpack = require('webpack');
const dotenv = require('dotenv').config({path: __dirname + '/.env'});

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    devServer: {
        contentBase: __dirname + '/public/',
        hot: true,
        port: 3000,
        host: 'localhost',
        headers: {
            'Access-Control-Allow-Headers': '*'
        },
        historyApiFallback: true
    },
    output: {
        path: __dirname + '/public/bundles/',
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {test: /\.css?$/, use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ]},
            {test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader'
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.parsed)
        })
    ]
};
