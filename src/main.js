import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './routers/index'

// 引入ajax模块
import Axios from 'axios'
import VueAxios from 'vue-axios'

// 引入UI库
import Iview from 'iview'
import '../statics/theme.less'

Vue.config.productionTip = false
// 加载路由
Vue.use(VueRouter)
// 加载UI库
Vue.use(Iview)

// ajax配置文件
const axios = Axios.create({
  baseURL: '/api',
  methods: 'post'
})
// ajax返回体封装
axios.interceptors.response.use(function(response){
  return response.data
}, function(error) {
  return Promise.reject(error)
})
// 载入axios
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
