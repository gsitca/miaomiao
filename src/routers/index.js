import Vue from 'vue';
import Router from 'vue-router';
import MovieRouter from './movie';
import MineeRouter from './mine';
import CinemaRouter from './cinema';
Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: 'miaomiao' ,
  routes: [
  
    MovieRouter,
    MineeRouter,
    CinemaRouter,
    // 路由重定向
    {path: '/*',redirect:'/movie'},    

  ]
})
