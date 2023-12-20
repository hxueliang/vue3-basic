import { createRouter, createWebHistory } from 'vue-router';

import router20 from './20';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...router20,
  ],
});

export default router;