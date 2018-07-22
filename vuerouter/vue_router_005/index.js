let routes = [{
    path: "/user",
    name: "user",
    components: {
        sidebar: {
            template: "#tpl_sidebar"
        },
        content: {
            template: "#tpl_content"
        }
    }
}];

let router = new VueRouter({
    routes: routes
});

new Vue({
    el: "#app",
    router: router,
    methods:{
        router: function(){
            this.$router.push({
                name: "user"
            });
        }
    }
});