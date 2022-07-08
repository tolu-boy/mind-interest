import  globalAxios from 'axios'
import { useStore } from '../zustand';
import queryClient from 'utils/queryClient';

const ApiService = {}



export const axios = globalAxios.create({
    baseURL: 'https://app.themindinterest.com/admin', 
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')} :: ${localStorage.getItem('ip')}`
      }
    }
  )

  axios.interceptors.response.use(
    response => response,
    error => {
      const {status} = error.response;
      if (status === 401) {
        localStorage.setItem("auth",  false );
        localStorage.setItem("token",  null );
        localStorage.setItem("ip",  null );
        useStore.setState({ auth: false })
        queryClient.clear()
      }
     return Promise.reject(error);
   }
  );






  export const formatter = Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });


  
  ApiService.rejectTherapist = async (id) => {
    const response = await axios.patch( `/suspend-therapist/${id}`);
    return response
    
  };


  ApiService.acceptTherapist = async (id) => {
    const response = await axios.patch( `/activate-therapist/${id}`);
    return response
  };


  ApiService.SuspendUsers = async (id) => {
    const response = await axios.patch( `/suspend-user/${id}`);
    return response
    
  };
 

  ApiService.ActivateUsers = async (id) => {
    const response = await axios.patch( `/activate-user/${id}`);
    return response
    
  };

  
export default ApiService


