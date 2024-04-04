import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarStore = ('sidebar', ()=>{
    // localStorage.setItem('is_sidebar_opened',false)
    const isSidebarOpened = ref(false);
    const selected = useStorage('page',ref('profile'));
    const page = useStorage('page',ref('dashboard'));

    
    function toggleSidebar(){
        isSidebarOpened.value = !isSidebarOpened.value;
        if (localStorage.getItem('is_sidebar_opened') == 'true')
            localStorage.setItem('is_sidebar_opened',false);
        else
            localStorage.setItem('is_sidebar_opened',true);
        // alert(localStorage.getItem('is_sidebar_opened'));
    }
    function get_sidebar_status(){
        return localStorage.getItem('is_sidebar_opened');
    }
    return {isSidebarOpened,get_sidebar_status, selected, page, toggleSidebar}
});