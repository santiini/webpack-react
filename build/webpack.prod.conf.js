const Webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理文件夹
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 从 js 中提出 css
const PurifyCssWebpack = require('purifycss-webpack'); // 自动消除冗余的css代码
const glob = require('glob'); // glob扫描路径

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  // 多入口打包
  entry: {
    // app: './app.js',
    index: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    // filename前面我们可以使用一个变量[name],这个就表示获取entry里面的key作为文件名加在前面
    filename: '[name]-bundle.js',
  },
  // wepback 的各种 loaders 配置
  module: {
    //配置一个rules(规则),rules是一个数组,里面包含一条一条的规则
    rules: [
      {
        // 正则匹配文件类型
        test: /\.css$/,
        // use: 使用 'style-loader','css-loader'
        // 1. 简单配置
        // use:['xxx-loader','xxx-loader']
        // 2. 复杂配置: 用于多项配置项;
        // use: [
        //   { loader: 'style-loader' }, // 在使用 style-loader 插入到 style 标签
        //   { loader: 'css-loader' }, // 先使用 css-loader 解析 css 文件
        // ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            { loader: 'postcss-loader' }, //利用postcss-loader自动添加css前缀
          ],
          publicPath:'../' //解决css背景图的路径问题  css 文件和 images 的公共目录
          // publicPath:'../../' //解决css背景图的路径问题
        }),
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|gif$)/,
        use: [
          {
            loader: 'url-loader',
            options: { // 这里的options选项参数可以定义多大的图片转换为base64, 默认导入的是 base64 格式;
              limit: 5000,  // 表示小于50kb的图片转为base64,大于50kb的是路径
              outputPath: 'images', //定义输出的图片文件夹
            },
          },
        ],
      },
      {
        // 添加对 .styl 文件的支持
        test: /\.styl$/,
        // use: [
        //   { loader: 'style-loader' },
        //   { loader: 'css-loader' },
        //   { loader: 'stylus-loader' },
        // ]
        // 分离编译后的css文件
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader'],
        })
      }
    ],
  },
  plugins: [
    // 
    new Webpack.HotModuleReplacementPlugin(), // 调用 webpack 的热更新插件
    new CleanWebpackPlugin(['dist']), //传入数组,指定要删除的目录
    // 把打包后的文件插入到 index.html 中
    new HtmlWebpackPlugin({
      chunks: ['index'], // 引入 js 的限制: 对应 extry 中的 key;
      // options: 参考 https://github.com/jantimon/html-webpack-plugin
      hash:true, //向html引入的src链接后面增加一段hash值,消除缓存
      minify:{
        collapseWhitespace: false //折叠空白区域 也就是压缩代码
      },
      template: './index.html', // 模板地址
      title: 'My App', // 传入末班的参数
      // filename: './build/home1.html', // 输入文件的名称和地址, 基于 /dist 的地址
      publicPath: '/kol/app/dev', // 传入额外的参数, 这里是一个路径
      filename: 'index.html',
    }),
    // css 提取: 都提到dist目录下的css目录中,文件名是index.css里面
    new ExtractTextPlugin('css/index.css'),
    // 消除冗余代码, 必须在 extract-text-plugin 后面
    new PurifyCssWebpack({
      // 首先保证找路径不是异步的,所以这里用同步的方法
      // path.join()也是path里面的方法,主要用来合并路径的
      // 'src/*.html' 表示扫描每个html的css
      paths: glob.sync(path.join(__dirname, 'src/*.html')),
      // minimize: true,
      purifyOptions: {
        whitelist: [ '*daterangepicker*' ], // 白名单
        info: true,
        min: true,
      },
    })
  ],
  // 环境配置: production(默认) or development
  mode: 'production',
}