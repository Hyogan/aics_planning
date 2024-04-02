<script setup>
import { computed } from 'vue';
import { useUserStore } from '../stores/user';


const store = useUserStore();
const user = computed(() => store.user);

import useAuth from '../composables/Auth';
import SidebarArea from './dashboard/sidebar/SidebarArea.vue';
            const {logout} = useAuth();
            const log_user_out = async() => {
                // console.log('hello world')
                await logout();
            }
</script>

<template>
    <main class="w-full min-h-screen bg-gray-200 flex z-0 relative dark:bg-[#1b1c31]">
        <SidebarArea></SidebarArea>
        <div class="h-full w-full relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden flex h-screen overflow-hidden">
            <h2 class="text-2xl text-red-500 font-bold">Here is the dashboard of aics Planning app</h2>
            <h2 class="text-2xl text-red-500 font-bold">So welcome brother</h2>
            <p v-if="user"> Hello dear {{ user.email }} --------- {{ user.name }}</p>
            <!-- <button @submit.prevent="log_user_out" class=" ml-5 text-white px-4 py-2 bg-blue-500 hover:bg-blue-900 transition duration-700 w-fit">Logout</button> -->
            <form @submit.prevent="log_user_out">
                <button type="submit" class=" ml-5 text-white px-4 py-2 bg-blue-500 hover:bg-blue-900 transition duration-700 w-fit">Logout</button>
            </form>
        </div>
    </main>
    
</template>
