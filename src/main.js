/*
 * @Description: In User Settings EditUE.FILTER
 * @Author: your name
 * @Date: 2019-10-11 21:03:32
 * @LastEditTime: 2019-10-20 14:18:31
 * @LastEditors: Please set LastEditors
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg)
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
