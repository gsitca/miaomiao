import Vue from 'vue'
import App from './App.vue'
import router from './routers/index.js'
import store from './stores/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
