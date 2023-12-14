import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App/19-pinia持久化.vue';

const painia = createPinia();

const app = createApp(App);
app.use(painia);
app.mount('#app');
