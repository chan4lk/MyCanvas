var webpack = require('webpack');
var paths = {
    webroot: "./"
};
paths.entry = paths.webroot + "src/bootstrap.ts";
paths.bundleDest = paths.webroot + "dist/js/";

module.exports = {
    entry: {
        app: paths.entry,
        vendor: ["jquery"]
    },
    output: {
        filename: paths.bundleDest + "[name].bundle.js",
        sourceMapFilename: paths.bundleDest + "[name].js.map",
    },
    devtool: "source-map",
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */paths.bundleDest + "[name].bundle.js"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle : true,
            comments: false
        })
    ]
}