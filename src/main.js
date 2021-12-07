import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from './router'
import 'font-awesome/css/font-awesome.min.css'

const app = createApp(App).use(router);
app.use(PrimeVue);
app.mount("#app");
