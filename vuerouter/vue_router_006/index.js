let routes = [{
        name: "index",
        path: "/",
        component: {
            template: "<div>这里是首页</div>"
        }
    },
    {
        name: "user",
        path: "/user",
        component: {
            template: "<div>这里是用户页，需要鉴权</div>"
        }
    }
];

let router = new VueRouter({
    routes: routes
});

router.beforeEach((to, from, next) => {
    logged_in = true;
    if (!logged_in && to.name == "user") {
        next("/");
    } else {
        next();
    }
});

router.afterEach((to, from)=>{
    console.log("from:", from.path);
    console.log("to:", to.path);
});

new Vue({
    el: "#app",
    router: router,

});