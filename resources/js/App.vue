<template>
    <router-view></router-view>
    
</template>

<script>
 import NavBar from './Components/NavBar.vue'
    export default{
        components : {
            'navbar' : NavBar
        }
    }
    function flash(){
        alert('hello world')
    }
</script>


