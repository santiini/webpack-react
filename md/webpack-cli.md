# webpack4 的 webpack-cli 设置

webpack 的命令行指令从 webpack4 之后，分离到 webpack-cli 模块中

## 配置项 mode: production(默认) or development

webpack 启动的环境配置，有两种方式:

1. 命令行参数

```bash

 "dev": "webpack --config webpack.config.js --mode=development",

```

2. 在配置文件中，添加配置项 mode

```js
  module.exports = {
    entry: {
      app: './index.js',
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
    // module: {

    // },
    // plugins: [],
    // devServer: {},
    mode: 'production',
  }
```