import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Todos from '@/components/Todos'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: 'Main',
      component: Main,
      alias:'/trelloclone'
    },
    {
      path: '/:id',
      name: 'Todos',
      component: Todos
    }
  ]
})
