# 路由钩子

## 使用场景

* 跳转前判断权限
* 跳转后处理消息等

## 具体使用

* 实现跳转前 router.beforeEach(function (to, from, next){})
* next是跳转函数，next(true), next(false), next("/login")
* 实现跳转后 router.afterEach(function (to, from){})