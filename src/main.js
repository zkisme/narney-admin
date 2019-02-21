import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './routers/index'

import Axios from 'axios'
import VueAxios from 'vue-axios'

import Iview from 'iview'
import '../statics/theme.less'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Iview)

const axios = Axios.create({
  baseURL: '/api',
  methods: 'post'
})
Vue.use(VueAxios, axios)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
