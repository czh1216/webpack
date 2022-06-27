const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports ={
    mode: 'development',
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'index.html'
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
        
       
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test:/\.css$/,
                use:["style-loader", "css-loader"],
            },
            {
                test:/\.less$/, 
                use:["style-loader", "css-loader","less-loader"],
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use:[
                    {
                        loader: "url-loader",
                        options: {
                            limit:8192,
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset', 
                generator: { 
                    filename: 'font-[name].[hash:6][ext]'
                },
                parser: {
                    dataUrlCondition: {
                      maxSize: 1 * 1024,
                    },
                },
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] 
                    }
                }
            },
            
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader'
            //   },
            //   {
            //     test: /\.css$/,
            //     use: [
            //       'vue-style-loader',
            //       'css-loader'
            //     ]
            //   }
        ]
    }
    // plugins: [
    //     // 请确保引入这个插件！
    //     new VueLoaderPlugin()
    //   ]
    
    

}