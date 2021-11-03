import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostDetail from '../views/PostDetail.vue'
import Create from '@/components/Create.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/post/:slug',
    name: 'PostDetail',
    component: PostDetail,
  },
  {
    path: '/Create',
    name: 'Create',
    component: Create,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
 