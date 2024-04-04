import { ref } from "vue";
import { useRouter } from "vue-router";
// import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";
// import {useStore} from 'pinia';

export default function useAuth(){
    const auth = ref([]);
    const router = useRouter();
    const errors = ref('');
    const store = useUserStore();

      const getUser = async() =>{
        try {
          const response = await axios.get('/api/user/',{
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
          });
          return response.data;
      }catch(error){
          if(error.response){
            if(error.response.status === 422){
                console.log(errors.value)
            }
            else {
              console.log('There are other types of errors')
              console.error(error.response.data);
              console.error(error.response.status);
              console.error(error.response.headers);
            }
          }
          else if (error.request) {
            //The error is about the request
            console.log(error.request);
          }
          else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error', error.message);
          }  
      };
    };
  
      const login = async (data) => {
      errors.value = '';
      try {
            const response = await axios.post('/api/user/login', data);
            // Save token to local storage or Vuex store
            localStorage.setItem('token', response.data.token);

            // localStorage.setItem('token', response.data.token);
            // Redirect to dashboard or another page
            
            getUser().then(user => {
              store.saveUser(user);
              // console.log(user);
              localStorage.setItem('user', JSON.stringify(user));
            })
              router.push({name : 'dashboard'})
            
            // Redirect to dashboard or another page
            // router.push({name : 'dashboard'});
        }catch(error){
            if(error.response){
              if(error.response.status === 422 || 401){
                  errors.value = error.response.data;
                  // console.log(errors.value)
                  // alert('sir, big problem')
                  // console.log(error.response.data)
              }
              else {
                /*console.log('There are other types of errors')
                console.error(error.response.data);
                console.error(error.response.status);
                console.error(error.response.headers);*/
              }
            }
            else if (error.request) {
              console.log(error.request);
            }
            else {
              // Something happened in setting up the request that triggered an Error
              console.error('Error', error.message);
            }  
      };
    };

    const register = async (data) => {
      errors.value = '';
      try {
            const response = await axios.post('/api/user/register', data);
            // Save token to local storage or Vuex store
            localStorage.setItem('token', response.data.token);
            // Redirect to dashboard or another page
            
            getUser().then(user => {
              store.saveUser(user);
              // console.log(user);
              localStorage.setItem('user', JSON.stringify(user));
            })
              router.push({name : 'dashboard'})
        }catch(error){
            if(error.response){
              if(error.response.status === 422){
                  errors.value = error.response.data;
                  // console.log(errors.value)
                  // alert('sir, big problem')
                  // console.log(error.response.data)
              }
              else {
                /*console.log('There are other types of errors')
                console.error(error.response.data);
                console.error(error.response.status);
                console.error(error.response.headers);*/
              }
            }
            else if (error.request) {
              console.log(error.request);
            }
            else {
              // Something happened in setting up the request that triggered an Error
              console.error('Error', error.message);
            }  
      };
    };

    const logout = async() =>{
            axios.post('/api/user/logout', null, {
              headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
              }
            })
            .then(response => {
              // Clear token from local storage or Vuex store
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              // Redirect to login or another page
              router.push({name : 'login'})
            })
            .catch(error => {
              console.error(error);
            });
          };
        
 

    return {
        auth,
        login,
        logout,
        register,
        errors
    }
}