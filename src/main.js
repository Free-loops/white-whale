import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.scss'
import REM from './assets/js/rem'
import VConsole from 'vconsole'
new VConsole()
Vue.config.productionTip = false

Vue.use(REM, 750, 750)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
