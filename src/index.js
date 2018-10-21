import Vue from 'vue'
import App from './App.vue'
import './lib/globalregister'

new Vue({
    el: "#app",
    render:h=>h(App),
    doNotInit: true
})
// import Vue from 'vue';
// import App from './App';

// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// });


if (module.hot) {
    module.hot.accept();
  }
  
