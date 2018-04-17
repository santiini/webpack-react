# react 中的babel 配置

参考: https://blog.csdn.net/cyyy1223/article/details/78867941

## 依赖模块及配置

```bash

  npm install --save-dev babel-core babel-preset-env  babel-preset-react  babel-loader babel-preset-stage-0
```

1. babel-core 核心包
2. babel-preset-env 解析es的包,智能识别当前运行环境并进行转换
3. babel-preset-react 解析jsx的包
4. babel-preset-stage-0 es7不同阶段语法转码规则(0-4选装1个即可)
5. babel-plugin-transform-runtime 使es6中的api类似generator,promise对象等生效

## webpack 中配置 or .babelrc 中配置

```json
  {
    "presets": [
        "env","react", "stage-0"
    ],
    "plugins": [
      "transform-runtime"
    ]
  }

```