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
      alias:'/trelloclone',
      component: Main
     
    },
    {
      path: '/:id',
      name: 'Todos',
      component: Todos
    }
  ]
})
