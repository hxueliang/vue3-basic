import { createApp } from 'vue';
import { createPinia } from 'pinia';
import persist from 'pinia-plugin-persistedstate';

import App from './App/App.vue';
import router from './router';

const painia = createPinia();
painia.use(persist);

const app = createApp(App);
app.use(painia);
app.use(router);
app.mount('#app');
