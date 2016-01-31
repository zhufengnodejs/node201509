var webpack = require('webpack');
module.exports = {
    entry: {
        bundle:'./entry.js',
    },       //指定打包的入口文件，每有一个键值对，就是一个入口文件
    output: { //配置打包结果
        path: __dirname,       //定义了输出的文件夹
        filename: "[name].js"  //定义了打包结果文件的名称
    },
    module: {  //定义模块的加载逻辑
        loaders: [ //定义了一系列的加载器
            { test: /\.css$/, loader: "style!css" }, //当需要加载的文件匹配`test`的正则时，就会调用后面的`loader`对文件进行处理
            {test:/\.(png|jpg)$/,loader:'url?limit=40000'},
            {test: /\.js?$/,loader: 'babel', exclude: /node_modules/,  query: {compact: false,presets: ['es2015']}}
        ]
    },plugins: [
        new webpack.BannerPlugin('//珠峰培训'),
        new webpack.optimize.CommonsChunkPlugin('common.js')
    ],resolve: {
        alias: {
            jquery: "./lib/jquery/jquery.js"
        }
    }
};