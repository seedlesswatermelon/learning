# 元数据与路由匹配

## 解决问题
* beforeEach只能进行单个匹配，当包含子路由时，无效
* beforeEach针对于每条路由规则都要单独写代码进行区分

## 具体使用
* to.matched对象显示当前页的所有路由
* to.matched.some((item){})函数遍历所有匹配的路由
* 路由支持meta对象