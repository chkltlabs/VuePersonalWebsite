// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes Vue and other libraries. It is a great starting point when
//  * building robust, powerful web applications using Vue and Laravel.
//  */
//
// require('./bootstrap');
//
// window.Vue = require('vue');
//
// /**
//  * The following block of code may be used to automatically register your
//  * Vue components. It will recursively scan this directory for the Vue
//  * components and automatically register them with their "basename".
//  *
//  * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
//  */
//
// // const files = require.context('./', true, /\.vue$/i)
// // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
//
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
//
// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */
//
// const app = new Vue({
//     el: '#app',
// });

//example code preserved above for learning

import Vue from 'vue'
import VueRouter from "vue-router"
import vuetify from './plugins/vuetify'

Vue.use(VueRouter);

import App from './views/App'
import Home from './views/Home'
import About from './views/About'
import Portfolio from './views/Portfolio'
import Blog from './views/Blog'
import Contact from './views/Contact'


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },

    ],
});

const app = new Vue({
    el: '#app',
    vuetify,
    components: {App:App},
    router,
});

