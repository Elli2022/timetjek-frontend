// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importera routern

const app = createApp(App);
app.use(router); // Använd routern
app.mount('#app');
