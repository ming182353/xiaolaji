import Vue from 'vue'
import Router from 'vue-router'

import Movie from '@/views/Movie'
import MovieMain from '@/views/MovieMain'
import Zoom from '@/views/Zoom'
import Login from '@/views/Login'
import ShopCar from '@/views/ShopCar'

Vue.use(Router)

let newRouter = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/moviemain',
      name: 'MovieMain',
      component: MovieMain
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/shopCar',
      name: 'ShopCar',
      component: ShopCar
    },
    {
      path: '/zoom',
      name: 'Zoom',
      component: Zoom,
      meta: {
        isLogin: true
      }
    }
  ]
})
newRouter.beforeEach((to, from, next) => {
  let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  if (to.meta.isLogin && !userInfo) {
    window.localStorage.setItem('toPath', to.path)
    next('login')
  } else {
    next()
  }
})

export default newRouter
