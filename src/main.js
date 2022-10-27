import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import LoadingPage from '@/components/LoadingPage.vue';

createApp(App).component('LoadingPage', LoadingPage).use(router).mount('#app');
