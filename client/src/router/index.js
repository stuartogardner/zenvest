import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import DealDetails from '@/components/DealDetails'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/deal/*',
      component: DealDetails,

    },
    {
      path: '*',
      redirect: '/',

    }
  ]
})

export default router;
