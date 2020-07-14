import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import Nest from '../views/Nest.vue'
import Page from '../views/Page.vue'
import Auth from '../views/Auth.vue'
import Signin from '../views/Signin.vue'
import Book from '../views/Book.vue'
import Payload from '../views/Payload.vue'

// Vue Routerを有効化
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      sub: Article
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // コンポーネントの非同期ロード
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/article/:aid',
    name: 'Article',
    component: Article,
    props: true,
  },
  {
    path: '/nest/:aid',
    name: 'Nest',
    component: Nest,
    props: true,
    children: [
      {
        path: 'pages/:page_num',
        name: 'Page',
        component: Page,
        props: true,
      }
    ]
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
    props: true,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    props: true,
    meta: {
      isRequestAuth: true,
    }
  },
  {
    path: '/book',
    name: 'Book',
    component: Book,
    props: true,
  },
  {
    path: '/payload',
    name: 'Payload',
    component: Payload,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
