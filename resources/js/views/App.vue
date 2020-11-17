<template>
<!--    <div>-->
<!--        <h1>Vue Home Page</h1>-->

<!--        <p>-->
<!--            <router-link :to="{ name: 'home'}">Home</router-link>-->
<!--            <router-link :to="{ name: 'about'}">About</router-link>-->
<!--            <router-link :to="{ name: 'portfolio'}">Portfolio</router-link>-->
<!--            <router-link :to="{ name: 'blog'}">Blog</router-link>-->
<!--            <router-link :to="{ name: 'contact'}">Contact</router-link>-->
<!--        </p>-->

<!--        <div class="container">-->
<!--            <router-view></router-view>-->
<!--        </div>-->
<!--    </div>-->
    <v-app>
        <v-navigation-drawer app>
            <router-link tag="li" :to="{ name: 'home'}">Home</router-link>
            <router-link tag="li" :to="{ name: 'about'}">About</router-link>
            <router-link tag="li" :to="{ name: 'portfolio'}">Portfolio</router-link>
            <router-link tag="li" :to="{ name: 'blog'}">Blog</router-link>
            <router-link tag="li" :to="{ name: 'contact'}">Contact</router-link>
        </v-navigation-drawer>
        <v-app-bar
            app
            color="purple"
            dark
            >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar title>Erik V Gratz, Dungeon Master</v-toolbar>
        </v-app-bar>
        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>
<script>
    export default {
    }
</script>
