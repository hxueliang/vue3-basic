import layoutArticle from './layoutArticle';
import layoutUser from './layoutUser';


export default [
  {
    path: '/',
    component: () => import('@/views/20/layout/LayoutContainer.vue'),
    redirect: '/article/manage',
    children: [
      ...layoutArticle,
      ...layoutUser,
    ]
  },
];