import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './pages/Home.vue'),
      children:[
        {
          path: '',
          redirect: 'codefragment'
        },
        {
          path: 'codefragment',
          name: 'codefragment',
          component: () => import(/* webpackChunkName: "home" */ './pages/codefragment.vue'),
        }
      ]
    }
  ]
})
