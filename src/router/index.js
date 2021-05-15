import { createRouter, createWebHistory } from '@ionic/vue-router';

import notePages from '../pages/notePages.vue'
const routes = [
  {
    path: '/',
    redirect: '/notes'
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
