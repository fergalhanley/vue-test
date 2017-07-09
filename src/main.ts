import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import Hello from './pages/Hello.vue'
import About from './pages/About.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
