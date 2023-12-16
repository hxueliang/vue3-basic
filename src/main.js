import { createApp } from 'vue';
import { createPinia } from 'pinia';
import persist from 'pinia-plugin-persistedstate';

import App from './App/20-大件事案例.vue';
import router from './router';

// 20-大件事案例
import '@/assets/style/20/main.scss';

const painia = createPinia();
painia.use(persist);

const app = createApp(App);
app.use(painia);
app.use(router);
app.mount('#app');
