import  globalAxios from 'axios'

const ApiService = {}


export const axios = globalAxios.create({
    baseURL: 'https://app.themindinterest.com/admin', 
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')} :: ${localStorage.getItem('ip')}`
      }
    }
  )


  
  ApiService.rejectTherapist = async (id) => {
    const response = await axios.patch( `/suspend-therapist/${id}`);
    return response
    
  };


  ApiService.acceptTherapist = async (id) => {
    const response = await axios.patch( `/activate-therapist/${id}`);
    return response
  };

  
export default ApiService
