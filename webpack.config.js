const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
        
       
    ],
    module: {
        rules: [
            {
                test:/\.css$/,
                use:["style-loader", "css-loader"],
            },
            {
                test:/\.less$/,
                use:["style-loader", "css-loader","less-loader"],
            }
        ]
    }
    
    

}