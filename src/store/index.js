import { createPinia } from 'pinia';
import persist from 'pinia-plugin-persistedstate';

const painia = createPinia();
painia.use(persist);

export default painia;

export * from './20/user';