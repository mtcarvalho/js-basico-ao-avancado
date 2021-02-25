module.exports = {
    devtool: 'eval-source-map',
    entry: ["@babel/polyfill", "./src/main.js"],
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
    },
    devtool: "source-map",
    devServer: {
        contentBase: __dirname + "/public"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ],
    }
}