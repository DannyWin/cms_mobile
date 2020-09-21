import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:7001';

// axios.interceptors.response.use(
//     (response) => {return response;},  
//     (error) => {
//         if (error.response.status === 401 ) {
//         //window.location = '/login';
//         } else if(error.response.status >=300 && error.response.status<500){
//             return error.response;
//         }else {
//             return Promise.reject(error);
//         }
//     }
// )
  


interface ILoginParams{
    uid:string,
    pwd:string
}

export const apiLogin = async (params:ILoginParams) => await axios.post('/login',params).then( ( res ) => res );