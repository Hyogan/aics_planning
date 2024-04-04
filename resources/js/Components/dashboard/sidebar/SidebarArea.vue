<template>
            <!-- <aside class="sidebar1 absolute bg-white shadow-lg shadow-gray-500 top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full md:translate-x-0 dark:bg-[#222338] dark:shadow-none dark:border-r-4 border-slate-900"> -->
            <!-- <aside class="absolute bg-white left-0 fixed top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden border-slate-900 shadow-lg shadow-gray-500 w-64 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 dark:bg-[#222338] dark:shadow-none dark:border-r-4 border-slate-900" :class="{classObject}"> -->
            <!-- <aside class="bg-white absolute bg-white left-0 fixed top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden border-slate-900 shadow-lg shadow-gray-500 w-64 duration-300 ease-linear  lg:static lg:translate-x-0 dark:bg-[#222338] dark:shadow-none dark:border-r-4 border-slate-900"> -->
              <aside class="bg-white absolute bg-white  shadow-lg shadow-gray-500 left-0 fixed top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden border-slate-900 shadow-lg shadow-gray-500 w-64 duration-300 ease-linear  lg:static lg:translate-x-0 dark:bg-[#222338] dark:shadow-none dark:border-r-4 border-slate-900">  
              <h3 class="mb-4 ml-4 text-sm font-medium text-bodydark2">{{ item ? 'he ': 'not he'  }}</h3>
                <DropdownUser></DropdownUser>
                <ul class="mb-6 flex flex-col gap-1.5">
                <SidebarItem
                    v-for="(menuItem, index) in menuItems"
                    :item="menuItem"
                    :key="index"
                    :index="index"
                />
                </ul>
                <form @submit.prevent="log_user_out">
                    <button type="submit" class=" ml-5 text-white px-4 py-2 bg-blue-500 hover:bg-blue-900 transition duration-700 w-fit">Logout</button>
                </form>
            </aside>
            
</template>



<script setup>
import {computed,reactive, onMounted, ref} from 'vue';
import SidebarItem from './sidebarItem.vue';
import useAuth from '../../../composables/Auth';
import { useSidebarStore } from '../../../stores/sidebar';

onMounted :{
  localStorage.setItem('is_sidebar_opened',false);
}

const { isSidebarOpened, get_sidebar_status} = useSidebarStore()

const sidebarStore = useSidebarStore();
const isOpen = ref(sidebarStore.isSidebarOpened);
const target = ref(sidebarStore.isSidebarOpened);

setInterval(() => {
  target
}, 2500);
console.log(isOpen)

          const {logout} = useAuth();
            const log_user_out = async() => {
                await logout();
          }

const openedSidebar = reactive({
    isSidebarOpened : false,
    'bg-red-500' : isSidebarOpened
});

const menuItems = ref([
      {
        icon: ``,
        label: 'Dashboard',
        route: '#',
        // children: [{ label: 'dashboard', route: '/' }]
      },
      {
        icon: ``,
        label: 'Calendar',
        route: '/calendar'
      },
      {
        icon: ``,
        label: 'Profile',
        route: '/profile'
      },
      {
        icon: ``,
        label: 'Forms',
        route: '#',
        children: [
          { label: 'Form Elements', route: '/forms/form-elements' },
          { label: 'Form Layout', route: '/forms/form-layout' }
        ]
      },
      {
        icon: ``,
        label: 'Tables',
        route: '/tables'
      },
      {
        icon: ``,
        label: 'Pages',
        route: '#',
        children: [{ label: 'Settings', route: '/pages/settings' }]
        },
])    

</script>