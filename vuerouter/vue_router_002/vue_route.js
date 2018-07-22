// component下面的template
// /user/:name 全路径下的name，不要缺失后面的/
let routes = [{
    path: "/user/:name",
    component: {
        template: "#user"
    }
}];

let router = new VueRouter({
    routes: routes
});

new Vue({
    el: "#app",
    router: router
});