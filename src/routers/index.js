import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'

const routes = [
  {path: '/login', component: Login}
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router