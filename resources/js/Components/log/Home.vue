<template>
    <div class="flex flex-col w-full h-[100vh] bg-hero_pattern justify-center items-center">
        <!-- <strong class="text-4xl text-white">Current route path:</strong> {{ $route.fullPath }} -->
        <h2 class="text-4xl text-green-500 font-bold">Here is the start of aics Planning app</h2>
        <div class="flex space-y-4 flex-col justify-center w-1/2 text-center items-center">
            <h1 class="text-bold text-6xl font-bold text-white">Hello world</h1>
            <p class="text-center text-white font-semibold mt-2">
                Hello buddy, welcome in the AICS PLANNING APP, use all 
                the functionnalities that this wonderfull programm to create, read, update 
                and even delete to consult or build up the aics planning for the week . <br> Click down here to sign up or login !
            </p>
            <div class="flex flex-col md:flex-row">
                <button>
                    <router-link class="flex mx-4 justify-center align-center w-fit px-8  text-lg py-4  font-semibold bg-transparent border-2 text-white transition ease-in-out duration-500  hover:bg-blue-500 hover:text-white hover:border-blue-500" :to="{ name : 'signup' }">Signup</router-link>
                </button>
                <button>
                    <router-link class="flex mx-4 justify-center align-center bg-white w-fit px-8  text-lg py-4 border-2  font-semibold transition ease-in-out duration-500  hover:bg-blue-500 hover:text-white hover:border-blue-500" :to="{ name : 'login' }">Login</router-link>
                </button>
            </div>
        </div>  
    </div>   
</template>