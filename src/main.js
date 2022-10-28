import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import LoadingPage from '@/components/LoadingPage.vue';

createApp(App)
  .component('LoadingPage', LoadingPage)
  .use(router)
  .use(store)
  .mount('#app');
