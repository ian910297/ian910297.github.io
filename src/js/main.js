// System Library
import Vue from 'vue'
import VueRouter from 'vue-router'

// Demonic's Library
import App from './views/App'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

