var path = require('path');
var utils = require('./utils');
var config = require('../config');
var reactLoaderConfig = require('./react-loader.conf');
var os = require('os');//os.cpus().Length 一般会取不到值，这里直接size:4,而不是size:os.cpus().length
var Happypack = require('happypack');
var happypackThreadPool = Happypack.ThreadPool({size:4});//size:os.cpus().Lengt根据电脑的idle，配置当前
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //独立打包css文件插件
function resolve (dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  entry: {
    app: ['./src/main.js'],
    vendor: ['react', 'react-dom', 'prop-types', 'react-router-dom', 'redux', 'react-redux']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
    chunkFilename: '[name].[id].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', 'less'],
    alias: {
      '@': resolve('src'),
      'components': path.resolve(__dirname, '../src/components'),
      'containers': path.resolve(__dirname, '../src/containers'),
      'images': path.resolve(__dirname, '../src/assets/images'),
      'node': path.resolve(__dirname, '../node_modules')
    }
  },
  module: {
    rules: [
        {
          test: /\.bundle\.js$/,
          loader: 'bundle-loader',
          include:path.join(__dirname,'./src/containers'),
          exclude:/node_modules/,
          options: {
              lazy: true,
              name: '[name]'
          }
        },
        {
          test:/\.jsx?$/,
          use: {
              loader: 'babel-loader',
              options: {
                presets:['react','es2015','stage-0']
              }
          },
          include:path.join(__dirname,'./src'),
          exclude:/node_modules/
          },
        {
          test: /\.(js|jsx)$/,
          use: 'happypack/loader?id=happybabel',
          exclude: /node_modules/ // 在使用babel-loader时候一定要加上exclude,排除node_modules文件夹 
        },
        // 解析css文件 
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader,'style-loader', 'css-loader'],// use从右往左写  
          include:path.join(__dirname,'./src'),
          exclude:/node_modules/
        },
        // 解析less  
        {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
            include:path.join(__dirname,'./src'),
            exclude:/node_modules/
        },
        {   //配置辅助loader,处理图片  
          test:/\.(jpg|png|gif|svg)$/,
          use: [
            {
            loader: 'url-loader',
            options: {
              limit: 1024,
            outputPath:'images/'
            }
            }
          ],
          include:path.join(__dirname,'./src'),
          exclude:/node_modules/
        },
        {
              test:/\.(html|html)$/,
              use:'html-withimg-loader',
              include:path.join(__dirname,'./src'),
              exclude:/node_modules/
        },
        {   //处理图片外的其他文件类型
          test:/\.(appcache|svg|eot|ttf|woff|woff2|mp3|pdf)(\?|$)/,
          use: [
            {
            loader: 'file-loader?name=[name].[ext]',
            options: {
              limit: 1024,
              outputPath:'images/'
            }
            }
          ],
          include:path.join(__dirname,'./src'),
          exclude:/node_modules/
        }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({//选项与htmlPlugin类似
      filename: "index.css"
    }),
    new Happypack({
      id:"happybabel",
      loaders:['babel-loader'],
      threadPool:happypackThreadPool,
      cache:true,
      verbose:true
    })
  ]
};
