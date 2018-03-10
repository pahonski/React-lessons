const path = require('path');

module.exports = {
    entry: path.join(__dirname, './src/components', 'Main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
        library: "mylib"//чтобы взаимодействовать с модулями из вне
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },

    devtool: "source-map",//для разрабов (или inline-source-map)

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        stats: "errors-only"
    }
};