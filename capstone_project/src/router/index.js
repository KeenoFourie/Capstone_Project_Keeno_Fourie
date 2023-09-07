import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import { useCookies } from 'vue3-cookies'
// const { cookies } = useCookies()


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // beforeEnter() {
    //   if(!cookies.get('RealUser')) {
    //     router.push({name: 'login'});
    //   }
    // }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/AccountView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/appointments',
    name: 'appointments',
    component: () => import('../views/AppointmentsView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue')
  },
  {
    path: '/contact_us',
    name: 'contact_us',
    component: () => import('../views/ContactUsView.vue')
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import('../views/CoursesView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/question_1',
    name: 'question_1',
    component: () => import('../views/Question_1View.vue')
  },
  {
    path: '/question_2',
    name: 'question_2',
    component: () => import('../views/Question_2View.vue')
  },
  {
    path: '/question_3',
    name: 'question_3',
    component: () => import('../views/Question_3View.vue')
  },
  {
    path: '/question_4',
    name: 'question_4',
    component: () => import('../views/Question_4View.vue')
  },
  {
    path: '/question_5',
    name: 'question_5',
    component: () => import('../views/Question_5View.vue')
  },
  {
    path: "/course/:courseID",
    name: "singlecourse",
    props: true,
    component: () => import("../views/CourseDisplayView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router