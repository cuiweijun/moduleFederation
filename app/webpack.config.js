const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
// console.log(new ModuleFederationPlugin)
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
        port:8081
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
            name:"remote",
            // library:{type:"var",name:"remote"},
            filename:"remoteEntry.js",
            exposes:{  //导出
                "./App":"./src/App.js"
            }
        })
    ]

}