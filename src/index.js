import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import routes from './router'
import './lib/globalregister'
Vue.use(VueRouter); //挂载属性

let router = new VueRouter(routes);

new Vue({
  el: "#app",
  router: router,
  render: h => h(App),
  doNotInit: true
})

if (module.hot) {
  module.hot.accept();
}