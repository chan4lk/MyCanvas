var webpack = require('webpack');
var paths = {
    webroot: "./"
};
paths.entry = paths.webroot + "src/bootstrap.tsx";
paths.bundleDest = paths.webroot + "dist/js/";

module.exports = {
    entry: {
        app: paths.entry,
        vendor: []
    },
    output: {
        filename: paths.bundleDest + "[name].bundle.js",
        sourceMapFilename: paths.bundleDest + "[name].js.map",
    },
    devtool: "source-map",
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ },
            { test: /\.tsx$/, loader: 'ts-loader', exclude: /node_modules/ }
        ],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [        
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin(
            /* chunkName= */"vendor",
             /* filename= */paths.bundleDest + "[name].bundle.js"
        ),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle : true,
            comments: false
        })
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
}