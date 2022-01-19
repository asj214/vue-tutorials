import store from './store'
import VueRouter from 'vue-router'

const routes = [
  {
    path: "/login",
    name: "loginPage",
    meta: {
      authFree: true
    },
    component: () => import('./views/Login')
  },
  {
    path: "/",
    name: "dashBoard",
    component: () => import('./views/DashBoard')
  }
]

const router = new VueRouter({
  mode: 'history',
  hashbang: false,
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const ignoreAuth = to.matched.some(r => r.meta.authFree)
  if (ignoreAuth) return next()

  store.dispatch('CHECK_AUTH').then(() => {
    next()
  })
})

export default router
