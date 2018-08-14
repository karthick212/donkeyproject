import Vue from 'vue'
import Router from 'vue-router'
import AdminRoutes from './admin'
// import UserRoutes from './user'
import CourierRoutes from './courier'
import CommonRoutes from './common'

Vue.use(Router)

Vue.prototype.$hostName = 'http://18.213.86.227:4000'
// Vue.prototype.$hostName = 'http://localhost:4000'
const baseRoute = [];

const routes = baseRoute.concat(AdminRoutes, CourierRoutes, CommonRoutes);
export default new Router({
  mode: 'history',
  routes
})
