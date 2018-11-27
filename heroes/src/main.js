import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/'

Vue.prototype.axios=axios

// 引入所需要的样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/index.css'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
