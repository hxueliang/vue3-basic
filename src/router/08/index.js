import { addBasePath } from "@/utils";


const BASE_PATH = '/08';
const router = [
  { path: '/', component: () => '' },
  { path: '/login', component: () => import('@/views/08/LoginPage.vue') },
  { path: '/main', component: () => import('@/views/08/MainPage.vue') },
];
addBasePath(BASE_PATH, router);

export default router;
