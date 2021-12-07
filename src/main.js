import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App).use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(PrimeVue);
app.mount("#app");
