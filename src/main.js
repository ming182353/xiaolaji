// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import mock from './mock'
import axios from 'axios'
import loading from './plugin/loading'

import directives from './directive'

var instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

Vue.use( loading )

// 请求前的回调（也叫拦截器）
instance.interceptors.request.use(function (config) {
  //console.log( '请求开始并且成功' )
  Vue.prototype.$loading.show()
  return config;
}, function (error) {
  //console.log( '请求开始并且失败功' )
  return Promise.reject(error);
});

// 请求后的回调（也叫拦截器）
instance.interceptors.response.use(function (response) {
  //console.log( '请求结束并且成功' )
  Vue.prototype.$loading.hide()
  return response;
}, function (error) {
  //console.log( '请求结束并且失败' )
  return Promise.reject(error);
});


Vue.prototype.$axios = instance

for (let key in directives) {
  Vue.directive(key, directives[key])
}
Vue.filter('wode', function (value) {
  return value + 'aaaaaa'
})
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
