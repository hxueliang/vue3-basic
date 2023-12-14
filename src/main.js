import { createApp } from 'vue';
import { createPinia } from 'pinia';
import persist from 'pinia-plugin-persistedstate';

import App from './App/19-pinia持久化.vue';

const painia = createPinia();
painia.use(persist);

const app = createApp(App);
app.use(painia);
app.mount('#app');
