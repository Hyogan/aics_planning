import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore("user", () => {
    const user = ref({
        id: null,
        name: '',
        email: '',
        role: '',
    });

    const saveUser = (userData) => {
        user.value.id = userData.id;
        user.value.name = userData.name;
        user.value.email = userData.email;
        user.value.role = userData.role;
    };

    const clearUser = () => {
        user.value.id = null;
        user.value.name = '';
        user.value.email = '';
        user.value.role = '';
    };

    const isAuthenticated = computed(() => user.value.id !== null);

    return {
        user,
        saveUser,
        clearUser,
        isAuthenticated,
    };
});