import Home from './views/Home'
import About from './views/About'
import Portfolio from './views/Portfolio'
import Blog from './views/Blog'
import Contact from './views/Contact'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

export const routes = [
    {
        path: '/',
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
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    // {
    //     path: '/secure',
    //     name: 'secure',
    //     component: Secure,
    //     meta: {
    //         requiresAuth: true
    //     }
    // },

]
