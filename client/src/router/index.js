import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import DealDetails from '@/components/DealDetails'

Vue.use(Router)

const router = new Router({
  // history mode removes the /#/ after local host. E.g. from localhost:8080/#/... to localhost:8080/...
  mode: "history",
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
    // This redirects any url that isn't recognised to the '/' page
    {
      path: '*',
      redirect: '/',

    }
  ]
})

export default router;
