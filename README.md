# micro-frontend

## 基于create-react-app创建的single-spa应用

```
create-react-app packages/project --template  file:./template/cra-template-single
```

## 使用yarn workspace管理packages项目

### 指定子应用安装依赖包

```
$ yarn workspace project1 add vue --dev 《 往 project1 添加 vue 开发依赖
$ yarn workspace project1 remove vue    《 从 project1 移除 vue 依赖
```

### 子应用下运行指定的命令

yarn workspaces <command>

```
yarn workspaces run start;
```


## 使用lerna管理packages组件依赖包

### 创建npm包


```
lerna create @mo-helpers
```

### 为npm包添加相关依赖

```
lerna add chalk // 为所有 package 增加 chalk 模块
lerna add axios --scope @mo-demo/cli-shared-utils // 为 @mo-demo/cli-shared-utils 增加 semver 模块 
lerna add @mo-demo/cli-shared-utils --scope @mo-demo/cli // 增加内部模块之间的依赖
```

### 重新安装依赖时,需要clean一下
```
lerna clean
```
### 依赖包管理

防止node_modules多层级嵌套 使用--hoist将依赖包提升至工程根目录

```
lerna bootstrap --hoist
```

为了省去每次都输入 --hoist 参数的麻烦，可以在 lerna.json 配置：

```
{
  "packages": [
    "packages/*"
  ],
  "command": {
    "bootstrap": {
      "hoist": true
    }
  },
  "version": "0.0.1-alpha.0"
}
```

之后进行清理一下<code>lerna bootstrap </code>再进行重新安装一下 lerna bootstrap

## 管理组件包

```
yarn workspace gpo add mo-components@0.0.0
```
需要在子package下添加版本号@version