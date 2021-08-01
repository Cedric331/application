require('./bootstrap');

window.Vue = require('vue').default;

import router from './router';
import App from './layouts/App.vue';
import '../css/app.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('home', require('./pages/Home.vue').default);

const app = new Vue({
    router,
    axios,
    el: '#app',
    render: h => h(App)
});
