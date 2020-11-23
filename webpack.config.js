const path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './frontend/kCal.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            {
            test: /\.css$/,
            use: ExtractTextWebpackPlugin.extract({ 
                // 2. Use ExtractTextWebpackPlugin
                // When not extracting, what kind of configuration is used to process css
                // fallback refers to what loader is used to compile the code after compilation
                fallback: {
                    loader: 'style-loader',
                    options: {
                        //This attribute is generally used in style-loader,
                        // refers to the unified merge of the code of multiple css files into a style tag
                        singleton: true
                    }
                },
                use: [ 
                    // When extracting, continue to process in the following way
                    {
                        loader: 'css-loader',
                        options: {
                            //Whether to enable the compression function
                            minimize: true
                        }
                    }
                ]
            })
        }
        ]
    },
     plugins: [
        new ExtractTextWebpackPlugin({ 
            //3. Configure properties in plugins
            filename: '[name].min.css', // Configure the extracted CSS name
            //true means that all css will be extracted, false will only extract the initialization, the default is false
            allChunks:false,
            //
            
        })
    ],
    devtool: 'source-map'
};
