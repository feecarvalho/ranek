import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import Product from '@/views/Product.vue';
import Login from '@/views/Login.vue';
import User from '@/views/User/User.vue';
import UserProducts from '@/views/User/UserProducts.vue';
import UserShops from '@/views/User/UserShops.vue';
import UserSells from '@/views/User/UserSells.vue';
import UserEdit from '@/views/User/UserEdit.vue';

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
    component: User,
    props: true,
    children: [
      {
        path: '',
        name: 'user',
        component: UserProducts,
      },
      {
        path: 'sells',
        name: 'sells',
        component: UserSells,
      },
      {
        path: 'shops',
        name: 'shops',
        component: UserShops,
      },
      {
        path: 'edit',
        name: 'edit-user',
        component: UserEdit,
      },
    ],
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
