const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Question.vue') },
      { path: 'Groups', component: () => import('src/pages/MsGroup.vue') },
      { path: 'Question', component: () => import('src/pages/MsQuestion.vue') },
      { path: 'Manage', component: () => import('src/pages/Manage.vue') },
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
