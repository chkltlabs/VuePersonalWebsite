// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes Vue and other libraries. It is a great starting point when
//  * building robust, powerful web applications using Vue and Laravel.
//  */
//
require('./bootstrap');
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

//individual file includes
require('./helpers')


import Vue from 'vue';
import VueRouter from "vue-router";
import Vuetify from "vuetify/lib";
import Vuex from 'vuex';
import store from './store';
import Axios from 'axios'

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

import {routes} from './routes';

const router = new VueRouter({
    mode: 'history',
    routes,
})

import App from './views/App'

// const store = new Vuex.Store({
//     state: {
//         posts: [],
//         contactInfo: [],
//         portfolio: [],
//         fadeThreshold: .75,
//     },
//     mutations: {
//         getPosts(state) {
//             axios.get('/api/posts').then((response) => {
//                 state.posts = response.data.posts
//             }).catch(error => console.log(error))
//         },
//         getContactInfo(state) {
//             axios.get('/api/contact').then((response) => {
//                 state.contactInfo = response.data.contactInfo;
//             }).catch(error => console.log(error))
//         },
//         getPortfolio(state) {
//             axios.get('/api/portfolio').then((response) => {
//                 console.log('portfolio route hit')
//                 state.portfolio = response.data.portfolio
//             }).catch(error => console.log(error))
//         },
//     },
//     getters: {
//         posts: state => {
//             return state.posts;
//         },
//         contactInfo: state => {
//             return state.contactInfo;
//         },
//         portfolio: state => {
//             return state.portfolio
//         },
//     },
// })


router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: '#673ab7',
                },
            },
        },
    }),
    components: {App: App},
    router,
    store,
    mounted: function () {
        //getJWT()
    },
    //updated: () => refreshJWT(),
});

