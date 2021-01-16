const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require("path");

const deps = require("../package.json").dependencies;
const devConfig = {
    mode: "development",
    output: {
        publicPath: 'http://localhost:8081/'
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 8081,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers":
                "X-Requested-With, content-type, Authorization",
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "marketing",
            filename: "remoteEntry.js",
            remotes: {
                container: 'container@http://localhost:8080/remoteEntry.js'
            },
            exposes: {
                './MarketingApp':'./src/bootstrap'
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
            },
        })
    ],
};

module.exports = merge(commonConfig, devConfig);