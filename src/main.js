import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App/15-pinia安装.vue';

const app = createApp(App);
const painia = createPinia();

app.use(painia);
app.mount('#app');
