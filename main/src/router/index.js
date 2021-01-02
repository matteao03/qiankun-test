import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/HomeContent.vue')
      }
    ]
  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import('@/views/Guide.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    let user = localStorage.getItem('user');
    if (user) {
      if (to.matched.length == 0 && !to.path.startsWith('/layout')) {
        next('/login')
      } else {
        next()
      }
    } else {
      next('/login')
    }
  }
})

export default router
