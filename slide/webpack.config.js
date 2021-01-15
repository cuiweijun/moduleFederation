const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
module.exports = {
    mode:"development",
    devtool:false,
    entry:"./src/index.js",
    output:{
        filename:"build.js",
       path: path.resolve(__dirname,"dist")
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        port:3000
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"webpack5",
            template:"./public/index.html"
        }),
        new ModuleFederationPlugin({
            name:"slide",
            library:{type:"var",name:"slide"},
            remotes:{
                "remote":"remote@http://127.0.0.1:8081/remoteEntry.js"
            }
        })
    ]

}