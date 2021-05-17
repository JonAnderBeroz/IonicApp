import { createRouter, createWebHistory } from '@ionic/vue-router';

import notePages from '../pages/notePages.vue'
import main from '../pages/main.vue'
const routes = [
  {
    path: '/',
    redirect: '/notes'
  },
  {
    path: '/main',
    component: main
  },
  {
    path: '/notes',
    component: notePages
  },
  {
    path: '/notes/:id',
    component: () => import('../pages/noteDetail.vue')
  },
  {
    path: '/notes/add',
    component: ()=> import('../pages/addNote.vue')
  },
  {
    path: '/login',
    name: 'userLogin',
    component: ()=> import('../pages/login.vue')
  },
  {
    path: '/register',
    name: 'userRegistration',
    component: ()=>import('../pages/register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
