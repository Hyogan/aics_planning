<template>
            <sidebar class="sidebar1 fixed bg-white shadow-lg shadow-gray-500 top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full md:translate-x-0 dark:bg-[#222338] dark:shadow-none dark:border-r-4 border-slate-900">
                <h3 class="mb-4 ml-4 text-sm font-medium text-bodydark2">{{ item ? 'he ': 'not he'  }}</h3>
                <ul class="mb-6 flex flex-col gap-1.5">
                <SidebarItem
                    v-for="(menuItem, index) in menuItems"
                    :item="menuItem"
                    :key="index"
                    :index="index"
                />
                </ul>
            </sidebar>
            
</template>



<script setup>
import {ref} from 'vue';
import SidebarItem from './sidebarItem.vue';
// const defineProps(['item', 'index'])

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