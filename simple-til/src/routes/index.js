/* eslint-disable prettier/prettier */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import LoginPage from '@/views/LoginPage.vue'
// import SignUpPage from '@/views/SignUpPage.vue'

Vue.use(VueRouter) // 플러그인을 초기화하기 위한 코드

export default new VueRouter({
  routes: [{
      path: '/login',
      component: () => import('@/views/LoginPage.vue') // dynamic import 기능, code splitting
    },
    {
      path: '/signup',
      component: () => import('@/views/SignUpPage.vue')
    }
  ]
});
