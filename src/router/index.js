import Vue from 'vue'
import Router from 'vue-router'
import Encoding from '@/components/Encoding'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Encoding',
      component: Encoding
    }
  ]
})
