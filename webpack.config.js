var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/index.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',  /* eslint-disable */
                test: path.join(__dirname, 'js'), /* eslint-enable */
                query: {
                    presets: 'es2015'
                }
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoEmitOnErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};
