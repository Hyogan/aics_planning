<script setup>
import { useSidebarStore } from '../../stores/sidebar'
import DarkModeSwitcher from './DarkModeSwitcher.vue'
import DropdownMessage from './DropdownMessage.vue'
import DropdownNotification from './DropdownNotification.vue'
import DropdownUser from './DropdownUser.vue'

const { isSidebarOpened, toggleSidebar } = useSidebarStore();
const user = JSON.parse(localStorage.getItem('user'));
const store_sidebar = useSidebarStore();
function open_close_sidebar() {
  // console.log('Toggling Sidebar');
  // console.log(isSidebarOpened.value);
  store_sidebar.toggleSidebar();
}
</script>

<template>
   <header class="section-header relative content-center mx-auto flex-col sm:flex-row flex w-full w-3/4 justify-around items-center px-4 py-8 bg-white rounded-xl shadow-lg shadow-gray-400 dark:bg-[#26273c] dark:shadow-sm dark:shadow-slate-700 dark:text-white dark:bg-[#26273c] dark:shadow-sm dark:shadow-slate-700">
                    <!-- <button  id="menu-btn-side" class=" my-2absolute block z-40 bg-transparent border-none hamburger md:hidden focus:outline-none">
                        <span class="hamburger-top"></span>
                        <span class="hamburger-middle"></span>
                        <span class="hamburger-bottom"></span>
                    </button> -->
                    <!-- <button @click="open_close_sidebar">Toggle</button> -->
                    <h2 class="flex items-center"><span class=" my-2 hidden mr-2 sm:block">Bienvenue </span><span class="font-bold text-xl capitalize">@<span>{{ user.name }}</span></span></h2>
                    <div class="links flex justify-center my-2 items-center space-x-2">
                        <!-- <button id="theme-toggle-btn" class="theme-toggle-btn text-slate-600 rounded-full w-full py-2 px-2 cursor-pointer flex justify-center items-center transition hover:text-white  hover:bg-blue-500  dark:text-white">
                            <i class="fa-regular fa-moon w-4 h-full hidden" id="theme-toggle-dark-icon"></i>
                            <i class="fa-regular fa-sun w-4 h-full hidden" id="theme-toggle-light-icon"></i>
                        </button> -->
                        <!-- {{-- <button id="toggle_dark_light_btn" class="text-slate-600 rounded-full w-full py-2 px-2 cursor-pointer flex justify-center items-center transition hover:text-white hover:bg-blue-500"><i class="fa-regular fa-moon w-full h-full"></i></button> --}} -->
                        <a class="text-slate-600 rounded-full w-full py-2 px-2 cursor-pointer flex justify-center items-center transition hover:text-white hover:bg-blue-500 dark:text-white" href="{{Route('superadmin.informations')}}"><i class="fa-regular fa-user"></i></a>
                        <a class="text-slate-600 rounded-full w-full py-2 px-2 cursor-pointer flex justify-center items-center transition hover:text-white hover:bg-blue-500 relative dark:text-white" href="{{Route('superadmin.messages')}}">
                            <i class="fa-regular fa-envelope"></i>
                            <span class="bg-red-400 w-6 h-6 flex justify-center items-center text-white font-semibold rounded-full absolute -top-2 -right-2"></span>
                        </a>
                        <a class="text-slate-600 rounded-full w-full py-2 px-2 cursor-pointer flex justify-center items-center transition hover:text-white hover:bg-blue-500 dark:text-white" href="{{Route('superadmin.logout')}}"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                    </div>    
                    <div class="flex items-center gap-3 2xsm:gap-7">
        <ul class="flex items-center gap-2 2xsm:gap-4">
          <li>
            <!-- Dark Mode Toggler -->
            <DarkModeSwitcher />
            <!-- Dark Mode Toggler -->
          </li>

          <!-- Notification Menu Area -->
          <DropdownNotification />
          <!-- Notification Menu Area -->

          <!-- Chat Notification Area -->
          <DropdownMessage />
          <!-- Chat Notification Area -->
        </ul>

        <!-- User Area -->
        <DropdownUser />
        <!-- User Area -->
      </div>
   </header>
</template>
