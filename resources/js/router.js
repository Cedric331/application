import Vue from 'vue';
import VueRouter from 'vue-router'

import Connexion from './pages/user/Connexion.vue'
import Inscription from './pages/user/Inscription.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'connexion',
            component: Connexion
        },
        {
            path: '/',
            name: 'inscription',
            component: Inscription
        },
    ]
})

export default router
