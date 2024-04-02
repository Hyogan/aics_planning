import { createRouter, createWebHashHistory } from "vue-router";
import {hasRole} from '../utilities/authGuards'
import Welcome from '../Components/Welcome.vue';
import Dashboard from '../Components/Dashboard.vue'
import Signup from '../Components/log/Signup.vue'
import Login from '../Components/log/Login.vue'
import Home from '../Components/log/Home.vue'
import NotFound from '../Components/NotFound.vue'
import { useUserStore } from "../stores/user";
const routes = [
    {
        path : '/',
        component : Home,
        name : 'home'
    },
    {
        path : '/welcome',
        component : Welcome,
        name : 'welcome'
    },
    {
        path : '/login',
        component : Login,
        name : 'login'
    },
    {
        path : '/signup',
        component : Signup,
        name : 'signup'
    },
    {
        path : '/dashboard',
        name : 'dashboard',
        component : Dashboard,
        meta: { requiresAuth: true },
        beforeEnter : (to,from,next) =>{
            const authStore = useUserStore();
            // isAuthenticated()
            if(authStore.isAuthenticated) {
                if(hasRole(authStore.user,'student'))
                    next({name : 'studentDashboard'})
                else if (hasRole(authStore.user,'teacher'))
                    next({name : 'teacherDashboard'})
                else if (hasRole(authStore.user,'daa')) 
                    next({name : 'daaDashboard'})
                else if(hasRole(authStore.user,'admin'))
                    next({name : 'welcome'})
                else
                    next({name : 'notFound'})
            }
            else {
                next({name : 'login'})
            }
        }
    },


    {
        path : '/hello',
        component : Dashboard,
        name : 'dashboard'
    },
    {
        path : '/:pathMatch(.*)*',
        name : 'notFound',
        component : NotFound
    }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    // history: createWebHashHistory(process.env.BASE_URL),
    routes, // short for `routes: routes`
})

export default router