<script setup>
import { computed } from 'vue';
import { useUserStore } from '../stores/user';

import HeaderArea from './Header/HeaderArea.vue';

const store = useUserStore();
const user = computed(() => store.user);

import useAuth from '../composables/Auth';
import SidebarArea from './dashboard/sidebar/SidebarArea.vue';
            const {logout} = useAuth();
            const log_user_out = async() => {
                await logout();
            }
</script>

<template>    
    <div class="flex h-screen overflow-hidden bg-gray-200">
    <!-- ===== Sidebar Start ===== -->
    <SidebarArea />
    <!-- ===== Sidebar End ===== -->

    <!-- ===== Content Area Start ===== -->
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <!-- ===== Header Start ===== -->
      <HeaderArea />
      <!-- ===== Header End ===== -->

      <!-- ===== Main Content Start ===== -->
      <main class="bg-white">
        <div class="mx-auto bg-gray-200 max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden flex h-screen overflow-hidden">
                <h2 class="text-2xl text-red-500 font-bold">Here is the dashboard of aics Planning app</h2>
                <h2 class="text-2xl text-red-500 font-bold">So welcome brother</h2>
                <p v-if="user"> Hello dear {{ user.email }} --------- {{ user.name }}</p>
                <!-- <button @submit.prevent="log_user_out" class=" ml-5 text-white px-4 py-2 bg-blue-500 hover:bg-blue-900 transition duration-700 w-fit">Logout</button> -->
            </div>
          
            <slot></slot>
        </div>
      </main>
      <!-- ===== Main Content End ===== -->
    </div>
  </div>




</template>



