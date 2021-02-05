import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginStatus: localStorage.getItem('loginStatus') || '',
        token: localStorage.getItem('token') || '',
        lowCalStorage: localStorage,
        user : {},
        posts: [],
        contactInfo: [],
        portfolio: [],
        fadeThreshold: .75,
        allowedTags: ['et', 'minus'],
        allTags: [],
    },
    mutations: {
        auth_request(state){
            state.loginStatus = 'loading'
            localStorage.setItem('loginStatus', state.loginStatus)
        },
        auth_success(state, token, user){
            state.loginStatus = 'success'
            state.token = token
            state.user = user
            localStorage.setItem('loginStatus', state.loginStatus)
        },
        master_auth_success(state){
            state.loginStatus = 'master'
            localStorage.setItem('loginStatus', state.loginStatus)
        },
        auth_error(state){
            state.loginStatus = 'error'
            localStorage.setItem('loginStatus', state.loginStatus)
        },
        logout(state){
            state.loginStatus = ''
            localStorage.setItem('loginStatus', state.loginStatus)
            state.token = ''
        },
        getPosts(state) {
            axios.get('/api/posts').then((response) => {
                state.posts = response.data.posts
            }).catch(error => console.log(error))
        },
        getContactInfo(state) {
            axios.get('/api/contact').then((response) => {
                state.contactInfo = response.data.contactInfo;
            }).catch(error => console.log(error))
        },
        getPortfolio(state) {
            axios.get('/api/portfolio').then((response) => {
                state.portfolio = response.data.portfolio
            }).catch(error => console.log(error))
        },
        getAllTags(state) {
            axios.get('/api/allTags').then((response) => {
                state.allTags = response.data
            }).catch(error => console.log(error))
        },
        setNewPostItem(state, item) {
            localStorage.setItem('new_post_item', item);
        },
        setNewPostTitle(state, title) {
            let item = localStorage.getItem('new_post_item');
            item.title = title;
            localStorage.setItem('new_post_item', item)
        },
        setNewPostSubtitle(state, subtitle) {
            let item = localStorage.getItem('new_post_item');
            item.subtitle = subtitle;
            localStorage.setItem('new_post_item', item);
        },
        setNewPostBody(state, body) {
            let item = localStorage.getItem('new_post_item');
            item.body = body;
            localStorage.setItem('new_post_item', item);
        },
        allowTag(state, tag) {
            state.allowedTags.push(tag);
        },
    },
    actions: {
        login({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: '/api/login', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.access_token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        if(user.email === process.env.MIX_MASTER_EMAIL){
                            commit('master_auth_success')
                        }
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        register({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: '/api/register', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({commit}){
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    },
    getters : {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.loginStatus,
        posts: state => {
            return state.posts;
        },
        contactInfo: state => {
            return state.contactInfo;
        },
        portfolio: state => {
            return state.portfolio
        },
        newPostItem: state => {
            return state.lowCalStorage.getItem('new_post_item')
                ? state.lowCalStorage.getItem('new_post_item')
                : {} ;
        },
        newPostTitle: state => {
            return state.lowCalStorage.getItem('new_post_item')
                ? state.lowCalStorage.getItem('new_post_item').title
                : '' ;
        },
        newPostSubtitle: state => {
            return state.lowCalStorage.getItem('new_post_item')
                ? state.lowCalStorage.getItem('new_post_item').subtitle
                : '' ;
        },
        newPostBody: state => {
            return state.lowCalStorage.getItem('new_post_item')
                ? state.lowCalStorage.getItem('new_post_item').body
                : '' ;
        },
    }
})
