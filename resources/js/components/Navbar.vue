<template>
<!--    <v-app-bar app bottom dense dark-->
<!--               class="text&#45;&#45;lighten-2">-->
    <v-bottom-navigation app dense dark shift color="primary" class="text--lighten-1">
        <v-toolbar-title class="px-2 py-3 d-none d-sm-flex font-weight-bold">
            <span>Erik</span>
            <span class="font-weight-light">V</span>
            <span>Gratz</span>
        </v-toolbar-title>
        <v-spacer class="d-none d-sm-flex"></v-spacer>
        <v-toolbar-items
            color="primary">
            <v-btn
                text small
                dusk="about-link"
                class="text-decoration-none"
                :to="{ name: 'about'}">
                <span>About</span>
                <v-icon>face</v-icon>
            </v-btn>
            <v-btn
                text small
                dusk="portfolio-link"
                class="text-decoration-none"
                :to="{ name: 'portfolio'}">
                <span>Portfolio</span>
                <v-icon>build</v-icon>
            </v-btn>
            <v-btn
                text small
                dusk="blog-link"
                class="text-decoration-none"
                :to="{ name: 'blog'}">
                <span>Blog</span>
                <v-icon>subject</v-icon>
            </v-btn>
            <v-btn
                text small
                dusk="contact-link"
                class="text-decoration-none"
                :to="{ name: 'contact'}">
                <span>Contact</span>
                <v-icon>question_answer</v-icon>
            </v-btn>
            <v-btn
                text small exact
                dusk="home-link"
                class="text-decoration-none"
                :to="{ name: 'home' }">
                <span class="d-xs-flex d-sm-none">Erik V Gratz</span>
                <v-icon>home</v-icon>
            </v-btn>
            <v-btn v-if="isLoggedIn"
                   text small
                   @click="logout"
                   class="text-decoration-none">
                <span>Logout</span>
                <v-icon>logout</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-bottom-navigation>
</template>
<script>
export default {
    computed : {
        isMasterUser : function(){ return this.$store.getters.authStatus === 'master' },
        isLoggedIn : function(){ return this.$store.getters.isLoggedIn },
    },
    methods: {
        logout: function () {
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push('/login')
                })
        },
        created: function () {
            this.$http.interceptors.response.use(undefined, function (err) {
                return new Promise(function (resolve, reject) {
                    if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
                        this.$store.dispatch(logout)
                    }
                    throw err;
                });
            });
        }
    },
}
</script>
