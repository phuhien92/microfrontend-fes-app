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
        publicPath: `${domain}/container/latest/`,    
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            filename: "remoteEntry.js",
            remotes: {
                'marketing':`marketing@${domain}/marketing/latest/remoteEntry.js`,
                'container': `container@${domain}/container/latest/remoteEntry.js`
            },
            exposes: {
                './store':'./src/store',
                './mf-header':'./src/components/Header/Header',
                './DataComponent': './src/components/DataComponent'
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