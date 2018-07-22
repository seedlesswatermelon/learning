# webpack
webpack demo

## webpack作用
* 简化代码间的依赖，提供了后端编写代码 为前端使用的方式
* 解决兼容性问题，ts->js问题等

## 使用方式
1. 工程初始化: npm init -y
2. 本地安装webpack: npm i webpack -D
3. 添加 pack（或者其他）命令到package.json
4. 配置webpack.config.js
5. 添加entry对象 多个
6. 添加output对象，包含filename=>[name].bundle.js 生成的文件名，其中[name]是entry中的源文件名，bundle是习惯文件名；包含path=>__dirname+"/dist" 生成的文件存放路径，其中__dirname
是webpack.config.js的当前路径
7. 添加.gitignore，內容是/node_modules，git暂存后会自动过滤