// utils/authGuard.js
// import store from '@/store'; // Assuming you're using Vuex or Pinia for state management
import  { useUserStore } from "../stores/user";



// const store = useUserStore();
  // const user = computed(() => store.user);

  // export function isAuthenticated() {
  //   const store = useUserStore(pinia);
  //   return store.isAuthenticated;
  // }

  // export function hasRole(role,) {
  //   const store = useUserStore(pinia);
  //   const userRole = store.user.role;
  //   return userRole === role;
  // }

  export function hasRole(user,role){
    const UserRole = user.role;
    console.log(user.id)
    return UserRole === role;
  }