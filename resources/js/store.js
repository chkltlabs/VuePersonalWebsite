import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginStatus: localStorage.getItem('loginStatus') || '',
        token: localStorage.getItem('token') || '',
        user : {},
        posts: [],
        contactInfo: [],
        portfolio: [],
        fadeThreshold: .75,
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
    }
})
