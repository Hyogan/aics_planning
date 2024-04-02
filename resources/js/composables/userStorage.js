import { defineStore } from 'pinia';
import {computed,reactive} from 'vue'
export const useUserStorage = defineStore({
    id : 'user_infos',
    stat
})

export default function useUserStorages() {
    const user = reactive({
        id : null,
        name : '',
        email : '',
        role : '',
    });

    const saveUser = (userData)=>{
        console.log(userData);
        user.id = userData.id;
        user.name = userData.name;
        user.email = userData.email;
        user.role = userData.role
    }
    
    const clearUser = ()=>{
        user.id = null,
        user.name = '',
        user.email = ''
        user.role = ''
    }
    const isAuthenticated = computed(() => user.id /= null);

    return {
        user, saveUser, clearUser, isAuthenticated
    };
};
