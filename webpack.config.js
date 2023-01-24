const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: `${__dirname}/src/App.js`,
    output: {
        path: `${__dirname}/build`,
        publicPath: '/react-food/build/',
        filename: 'bundle.js',
    },

    // generate different source maps for dev and production
    devtool: process.argv.indexOf('-p') === -1 ? 'eval-source-map' : 'source-map',

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(tsx|jsx|ts|js)?$/,
                use: "babel-loader",
                exclude: /node_modules/,
            }
        ],
    },

    // required because the defaults for webpack -p don't remove multiline comments
    optimization:
        process.argv.indexOf('-p') === -1
            ? {}
            : {
                minimize: true,
                minimizer: [
                    new TerserPlugin({
                        terserOptions: {
                            output: {
                                comments: false,
                            },
                        },
                        extractComments: false,
                    }),
                ],
            },

    // to mimic GitHub Pages serving 404.html for all paths
    // and test spa-github-pages redirect in dev
    devServer: {
        historyApiFallback: {
            rewrites: [{ from: /\/react-food\/[^?]/, to: '/404.html' }],
        },
    },
};