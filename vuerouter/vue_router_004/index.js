let routes = [{
    name: "user",
    path: "/user/:name",
    component: {
        template: "#tpl_user"
    }
}];

let router = new VueRouter({
    routes: routes
});

new Vue({
    el: "#app",
    router: router,
    methods: {
        surf: function () {
            this.$router.push({
                name: "user",
                params: {
                    name: "baba",
                },
                query: {
                    age: 18
                }
            });

        }
    }
});