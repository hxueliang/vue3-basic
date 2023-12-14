import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App/16-pinia语法.vue';

const app = createApp(App);
const painia = createPinia();

app.use(painia);
app.mount('#app');
