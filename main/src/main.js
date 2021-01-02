import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#main')

const getActiveRule = hash => location => location.hash.startsWith(hash)

registerMicroApps([
  {
    name: 'login',
    entry: `//${location.hostname}:8081`,
    container: '#micro-login',
    activeRule: getActiveRule('#/login'),
    props: { router }
  },
  {
    name: 'data',
    entry: `//${location.hostname}:8082`,
    container: '#micro-apps',
    activeRule: getActiveRule('#/layout/data'),
    props: { router }
  }
])

// 启动 qiankun
start()

// setDefaultMountApp('/#/login')