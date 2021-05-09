const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') },
      { path: '', component: () => import('src/pages/Question.vue') },
      { path: 'Groups', component: () => import('src/pages/MsGroup.vue') },
      { path: 'test', component: () => import('pages/test.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
