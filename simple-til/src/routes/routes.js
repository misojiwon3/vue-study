/* eslint-disable prettier/prettier */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import LoginPage from '@/views/LoginPage.vue'
// import SignUpPage from '@/views/SignupPage.vue'
import UserPage from '@/pages/UserPage.vue'

Vue.use(VueRouter) // 플러그인을 초기화하기 위한 코드

export default new VueRouter({
  mode: 'history', // url의 #이 제거됨, production 등록할 때 추가적인 설정을 해줘야 함
  routes: [
    {
      path: '/',
      redirect: '/login' // redirect 처리
    },
    {
      path: '/main',
      component: () => import('@/pages/MainPage.vue')
    },
    {
      path: '/login',
      component: () => import('@/pages/LoginPage.vue') // dynamic import 기능, code splitting
    },
    {
      path: '/signup',
      component: () => import('@/pages/SignupPage.vue')
    },
    {
      path: '/create',
      component: () => import('@/pages/PostAddPage.vue')
    },
    {
      path: '/post/:id',
      component: () => import('@/pages/PostUpdatePage.vue')
    },
    {
      path: '/user/:id', 
      component: UserPage
    },
    {
      path: '*',
      component: () => import('@/pages/errors/NotFoundPage.vue')
    }
  ]
});
