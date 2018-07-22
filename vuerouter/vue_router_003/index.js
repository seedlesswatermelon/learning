let routes = [{
    path: "/user/:name",
    component: {
        template: "#tpl_sub_router"
    },
    children: [{
        path: "more",
        component:{
            template: "#tpl_more"
        }
    }]
}];

let router = new VueRouter({
    routes: routes
});

new Vue({
    el: "#app",
    router: router
});