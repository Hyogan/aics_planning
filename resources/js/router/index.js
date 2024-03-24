import { createRouter, createWebHashHistory } from "vue-router";
import Welcome from '../Components/Welcome.vue';
import Dashboard from '../Components/Dashboard.vue'
const routes = [
    {
        path : '/',
        component : Welcome,
        name : 'home'
    },
    {
        path : '/welcome',
        component : Welcome,
        name : 'welcome'
    },
    {
        path : '/dashboard',
        component : Dashboard,
        name : 'dashboard'
    }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    // history: createWebHashHistory(process.env.BASE_URL),
    routes, // short for `routes: routes`
})

export default router