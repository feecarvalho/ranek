import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
];

const scrollBehavior = () => {
  return window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior,
  routes,
});

export default router;
