import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Look from '@/pages/look/Look'
import User from '@/pages/user/User'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },{
        path: '/look',
        name: 'Look',
        component: Look
    },
    {
        path: '/user',
        name: 'User',
        component: User
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    }
  ]
})
