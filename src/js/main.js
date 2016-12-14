import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-materials'

import App from './views/App'
import routes from './routes'

Vue.use(VueMaterial)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

