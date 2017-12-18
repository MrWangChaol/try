// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
//Vue.http.options.headers = { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' };
import rem from './js/rem.js'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
Vue.use(YDUI);
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(VueResource);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
