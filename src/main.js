import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App/17-pinia-action异步写法.vue';

const app = createApp(App);
const painia = createPinia();

app.use(painia);
app.mount('#app');
