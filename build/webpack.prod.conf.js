var fs = require('fs');
var path = require('path');
var utils = require('./utils');
var webpack = require('webpack');
var config = require('../config');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var cleanWebpaclPlugin = require('clean-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin"); //独立打包css文件插件
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var Happypack = require('happypack');
var happypackThreadPool = Happypack.ThreadPool({size:4});//size:os.cpus().Lengt根据电脑的idle，配置当前

 var webpackConfig= merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ 
      sourceMap: false
    })
  },
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  // cheap-module-eval-source-map is faster for development
  devtool: false,
  mode: 'production', //development  production ( 生产环境会将代码压缩 )
  plugins: [
    new cleanWebpaclPlugin(path.join(__dirname,'dist')),
    new webpack.DefinePlugin({
      'process.env': config.build.env
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new OptimizeCSSPlugin({
      assetNameRegExp: /\.style\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      serviceWorkerLoader: `<script>${fs.readFileSync(path.join(__dirname,
        './service-worker-dev.js'), 'utf-8')}</script>`
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/static'),//静态资源目录源地址
        to: config.build.assetsSubDirectory, //目标地址，相对于output的path目录
        ignore: ['.*']
      }
    ]),
    // service worker caching
    new SWPrecacheWebpackPlugin({
      cacheId: 'my-react-app',
      filename: 'service-worker.js',
      staticFileGlobs: ['dist/**/*.{js,html,css}'],
      minify: true,
      stripPrefix: 'dist/'
    }),
    new MiniCssExtractPlugin({//选项与htmlPlugin类似
      filename: "index.css"
    }),
    new FriendlyErrorsPlugin(),
    new Happypack({
      id:"happybabel",
      loaders:['babel-loader'],
      threadPool:happypackThreadPool,
      cache:true,
      verbose:true
    })
  ],
   //压缩js
   optimization: {
    minimizer: [
        new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                warnings: false,        
                drop_console: true,
                drop_debugger: true        
              },
              sourceMap: false
            }
        })
    ],
    splitChunks: {
      name: 'manifest',
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
}
});

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin');

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  );
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}
module.exports = webpackConfig