require('./bootstrap');

window.Vue = require('vue').default;

import router from './router';
import App from './layouts/App.vue';

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('home', require('./pages/Home.vue').default);

const app = new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
