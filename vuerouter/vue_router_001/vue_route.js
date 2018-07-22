var routes = [{
        path: "/",
        component: {
            template: "#index"
        }
    },
    {
        path: "/about",
        component: {
            template: "#about"
        }
    }
];

var router = new VueRouter({
    routes: routes
});

new Vue({
    el: "#app",
    router: router
});