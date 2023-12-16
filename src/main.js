import { createApp } from 'vue';

import App from './App/20-大件事案例.vue';
import router from './router';
import painia from './store';

// 20-大件事案例
import '@/assets/style/20/main.scss';

const app = createApp(App);
app.use(painia);
app.use(router);
app.mount('#app');
