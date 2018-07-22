let routes = [{
        path: "/",
        component: {
            template: "<div>我是首頁</div>"
        }
    },
    {
        path: "/user",
        meta: {
            has_logged: true
        },
        component: {
            template: "#tpl_user"
        },
        children: [{
            path: "more",
            component: {
                template: "<div>more info</div>"
            }
        }]
    }
];

let router = new VueRouter({
    routes: routes
});

router.beforeEach((to, from, next) => {
    has_logged = false;
    if (!has_logged &&
        to.matched.some((item) => {
            return item.meta.has_logged;
        })) {
        next("/");
    } else {
        next();
    }
});

new Vue({
    el:"#app",
    router: router
});