<template>
    <!-- component -->
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto px-8">
                    <div>
                        <h1 class="text-4xl font-semibold">M'inscrire </h1>
                    </div>
                    <div class="divide-y divide-gray-200">
                        <div v-if="errors">
                            <div v-for="(v, k) in errors" :key="k" class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
                                <p v-for="error in v" :key="error" class="text-sm">
                                {{ error }}
                                </p>
                            </div>
                        </div>
                        <form class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7" @submit.prevent="signupUser">
                            <div class="relative">
                                <input v-model="form.email" autocomplete="off" id="email" name="email" type="email" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                            </div>
                            <div class="relative">
                                <input v-model="form.name" autocomplete="off" id="name" name="name" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Username" />
                                <label for="name" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
                            </div>
                            <div class="relative">
                                <input v-model="form.password" autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                            </div>
                            <div class="relative">
                                <button class="bg-blue-500 text-white rounded-md px-4 py-1 hover:bg-green-500 transition duration-500">Submit</button>
                            </div>
                        </form>
                        <router-link class="text-green-500 underline rounded-md px-2 py-1" :to="{name : 'login'}">Login</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { reactive } from 'vue';
import useAuth from '../../composables/Auth';
    export default {
        setup() {
            const form = reactive({
                'name' : '',
                'password' : '',
                'email' : ''
            })
            const {errors, register} = useAuth()
            
            const signupUser = async()=>{
                // console.log(form)
                await register(form);
            }
            return {
                form,
                errors,
                signupUser
            }
        }
    }
</script>