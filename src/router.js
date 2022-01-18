import VueRouter from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('./views/Login')
  },
  {
    path: '/',
    name: 'Main',
    redirect: 'dashboard',
    component: () => import('./components/Layout.vue'),
    children: [
      {
        name: 'Dashboard',
        path: 'dashboard',
        meta: {
          name: '대쉬보드'
        },
        component: () => import('./views/DashBoard.vue')
      },
      {
        name: 'PostList',
        path: 'posts',
        component: () => import('./views/Posts/List.vue')
      },
      {
        name: 'PostCreate',
        path: 'posts/new',
        component: () => import('./views/Posts/Form.vue')
      },
      {
        name: 'PostDetail',
        path: 'posts/:id',
        component: () => import('./views/Posts/Form.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  hashbang: false,
  base: process.env.BASE_URL,
  routes
})

export default router
