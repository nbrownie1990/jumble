const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports ={
    mode: 'none',
    devtool: 'source-map',
    entry: "./src/App.js",
    output: {
        filename: "bundlejumble.js",
        path: path.resolve(__dirname,"build", "static", "js")
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].[css]"}),
        new HtmlWebpackPlugin({
            template: "./template.html"
        })
    ],
    module:{
        rules:[
            {
                test: /\.js|\.jsx$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: {
                    loader: 'source-map-loader'
                },
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "imgs"
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader", //3. Inject styles into DOM
                    "css-loader", //2. Turns css into commonjs
                    "sass-loader" //1. Turns sass into css
                ],
                exclude: /node_modules/
        }
        ]
    },
};