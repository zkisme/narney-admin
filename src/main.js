import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './routers/index'

import Iview from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Iview)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
