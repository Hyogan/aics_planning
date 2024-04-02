import './bootstrap';
import { createApp } from 'vue';
import {createPinia} from 'pinia';
import router from './router';
import App from './App.vue'
import { useUserStore } from './stores/user';

const pinia = createPinia()

// const app = createApp(App);
// app.use(pinia);
// app.use(router);
// app.mount('#app');

const app = createApp(App)
app.use(createPinia())
app.use(router);
app.mount('#app')

// createApp(App)
//     .use(router)
//     .mount('#app');


// i've got a problem , i would like to store the user infos in the pinia store when he get logged  in,
// and then signup: after that , i would like to get those infos from the store to print them in the Dashboard