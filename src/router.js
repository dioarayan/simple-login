import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './view/HomePage.vue';
import DashBoard from './view/DashBoard.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage },
    { path: '/dashboard', component: DashBoard },
  ],
});

export default router;

