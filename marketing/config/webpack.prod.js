const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require("path");

const deps = require("../package.json").dependencies;
const prodConfig = {
    mode: "production",
    output: {
        filename: '[name].[contenthash].js',
        publicPath: `${domain}/marketing/latest/`,    
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "marketing",
            filename: "remoteEntry.js",
            remotes: {
                container: `container@${domain}/marketing/latest/remoteEntry.js`
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

module.exports = merge(commonConfig, prodConfig)