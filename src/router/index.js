import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import Product from '@/views/Product.vue';
import Login from '@/views/Login.vue';
import User from '@/views/User/User.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/products/:id',
    name: 'Products',
    component: Product,
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: true,
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    props: true,
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
