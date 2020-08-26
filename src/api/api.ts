import axios from 'axios';

axios.defaults.baseURL = 'https://127.0.0.1:7001';

interface ILoginParams{
    uid:string,
    pwd:string
}

export const login = async (params:ILoginParams) => await axios.post('/login',params).then( ( res ) => res );

