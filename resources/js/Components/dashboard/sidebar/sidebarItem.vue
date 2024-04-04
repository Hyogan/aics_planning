
<script setup>
    const props = defineProps(['item', 'index']);
    // const currentPage = useRoute().name;

    const active = 'active';

    const handleClick = () =>{
        active = !active; 
    }

</script>

<template>

    <router-link :to="item.route" class="{{active ? 'border-l-4 mb-2 border-blue-500' : ''}} 
    hover:shadow-xl shadow-gray-400 text-slate-600 hover:rounded-lg w-full py-4 px-4 cursor-pointer flex justify-start items-center space-x-2 transition hover:text-white hover:bg-blue-500 dark:text-white" title="structure" :title="item.label">
                        <i class="{{ item.icon }}"></i>
                        <span class="menu-item">{{item.label}}</span>
                       
    </router-link>
    
</template>


