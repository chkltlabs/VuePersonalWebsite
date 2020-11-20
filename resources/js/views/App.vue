<template>
    <v-app >
        <v-app-bar app >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar title class="list-unstyled">
                <router-link dusk="home-link"       tag="li" :to="{ name: 'home'}"      ><h3>Erik V Gratz</h3></router-link>
                <router-link dusk="about-link"      tag="li" :to="{ name: 'about'}"     >About</router-link>
                <router-link dusk="portfolio-link"  tag="li" :to="{ name: 'portfolio'}" >Portfolio</router-link>
                <router-link dusk="blog-link"       tag="li" :to="{ name: 'blog'}"      >Blog</router-link>
                <router-link dusk="contact-link"    tag="li" :to="{ name: 'contact'}"   >Contact</router-link>
            </v-toolbar>
        </v-app-bar>
        <v-main dark app>
            <v-container light>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
export default {}
</script>
