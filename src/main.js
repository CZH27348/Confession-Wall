// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// Vue.prototype.$axios = axios
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'

router.beforeEach(function (to, from, next) {
  if (from.path === '/') {
    console.log('dfdsf')
    // Vue.prototype.$loading('登录中...')
    next()
  } else {
    next()
  }
})
Vue.use(Toast, {
  defaultType: 'bottom',
  duration: 1000,
  wordWrap: true,
  width: '170px'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
