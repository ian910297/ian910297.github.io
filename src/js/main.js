import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './pages/App'
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

