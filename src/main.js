import Vue from 'vue'
import App from './App.vue'
import router from './routers/index.js'
import store from './stores/index.js'
import axios from 'axios';
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
});
import Loading from '@/components/Loading';
Vue.component("Loading",Loading);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
