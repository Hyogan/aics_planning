<template>
    <div class='full-content'>
        <header class="header">
                    <p>
                        <!-- <img src="../assets/images/pages/pizzariba-logo.jpg" /> -->
                        <h1 clsss="title">AICS PLANNING <span>.</span></h1>
                    </p>
                <nav>
                    <div class="open-btn">
                        <!-- <img class="hamburger" src="../assets/images/pages/close-btn.png" @click="closeNav()" alt=""> -->
                    </div>
                    <router-link to="/">Home</router-link>
                    <router-link to="/dashboard">dashboard</router-link>
                    <router-link to="/welcome">Welcome</router-link>
                </nav> 
                <!-- <img class="hamburger" id="openNav" src="../assets/images/pages/hamburger-white.png" @click="openNav()" alt="">   -->
        </header>
        <router-view></router-view>
    </div>
</template>
<script>
    // import NotFound from './Pages/NotFound.vue';

    

    export default {

        methods : {
            openNav(){
                document.querySelector("nav").classList.add("opened");
                document.querySelector("#openNav").classList.toggle("closed");
            },
            closeNav(){
                document.querySelector("#openNav").classList.toggle("closed");
                document.querySelector("nav").classList.remove("opened");
            }
        }
    }

</script>

<style scoped>
    header {
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        padding: 15px 15px;
        background: green;
    }
 
    header a {
        font-size: 22px;
        color: white;
        text-decoration: none;
        padding: 12px 15px;
        transition: .7s;
        font-weight: bold;
    }
    header a:hover{
        background: white;
        color: orange;
        font-weight: bold;
    }
    header p {
        color : white;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

       
</style>