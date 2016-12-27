// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import store from './store'
Vue.use(VueRouter)
Vue.use(VueAxios, Axios)

import App from './App'
import Home from './components/Home'
import Tag from './components/Tag'
import About from './components/About'
import Article from './components/Article'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    name: 'home'
  },
  {
    path: '/tags',
    component: Tag,
    name: 'tags'
  },
  {
    path: '/about',
    component: About,
    name: 'about'
  },
  {
    path: '/article/:id',
    component: Article,
    name: 'article'
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  ...App,
  router,
  store
}).$mount('#app')
