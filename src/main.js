import { createApp } from 'vue/dist/vue.esm-bundler' ;
import App from './App.vue';
import './style.css';
import router from '@/router/router.js';
import { Icon } from '@iconify/vue';


const app = createApp(App)

// ثبت گلوبال کامپوننت Icon
app.component('IconifyIcon', Icon)

app.use(router);
app.mount('#app');
