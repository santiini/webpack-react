# 插件 html-webpack-plugin 设置

html-webpack-plugin 的主要功能是把 js 自动注入到 index.html 中;

## 各项配置说明

```js
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
      publicPath: '/kol/app', // 传入额外的参数, 这里是一个路径
      filename: 'index2.html',
    }),
    // 生成第二个页面
    new HtmlWebpackPlugin({
      chunks: ['app'],
      hash: true,
      minify: {
        collapseWhitespace: false,
      },
      template: './index2.html',
      // filename: './build/home2.html',
      filename: 'index.html',
    })
  ],
```