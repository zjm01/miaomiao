import Vue from 'vue'
import Router from 'vue-router'
import cinemaRouter from './Cinema/index'
import movieRouter from './Movie/index'
import mineRouter from './Mine/index'
Vue.use(Router)

export default new Router({
  routes: [
    cinemaRouter,
    movieRouter,
    mineRouter,
    {
      path:'/',
      redirect:'/movie'

    }
  ]
})
