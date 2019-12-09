import Vue from 'vue'
import Router from 'vue-router'
import routeChoose from '@/components/routeChoose'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'routeChoose',
      component: routeChoose
    }
  ]
})
