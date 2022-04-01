/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 19:28:08
 * @LastEditTime: 2019-09-05 09:35:19
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
Vue.use(Router)
const login = r => require.ensure([], () => r(require('@/views/login.vue')), 'login')
const home = r => require.ensure([], () => r(require('@/views/home.vue')), 'home')

const routes = [
  {
    path: '/',
    name: 'login',
    meta: { title: '人间不值得', keepAlive: false },
    component: login
  },
  {
    path: '/home',
    name: 'home',
    meta: { title: '人间不值得', keepAlive: false },
    component: home
  },
]

let router = new Router({
  routes
})

let setWechatTitle = function (title) {
  // document.title = title
  let mobile = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(mobile)) {
    let iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    let iframeCallback = function () {
      setTimeout(function () {
        iframe.removeEventListener('load', iframeCallback)
        document.body.removeChild(iframe)
      }, 0)
    }

    iframe.addEventListener('load', iframeCallback)
    document.body.appendChild(iframe)
  }
}

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

router.afterEach((route) => {
  setWechatTitle(route.meta.title)
})

export default router
