# 手动访问与传参

## 非router-link方式

* btn绑定函数
* 函数中使用this.router.push访问url或者对象
* 对象 使用name, params, query的形式
* this.$router引用router对象，在=>函数时this指向的是window 