import { createRouter, createWebHistory } from 'vue-router';

import { useUserStore } from '@/store';
import router08 from './08';
import router20 from './20';

const BASE_PATH = '20';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...router08,
    ...router20,
  ],
});

router.beforeEach((to) => {
  const useStore = useUserStore();
  const is20 = to.path.split('/')[1] === BASE_PATH;

  if (is20 && !useStore.token && to.path !== `/${BASE_PATH}/login`) {
    return `${BASE_PATH}/login`;
  }
});

export default router;