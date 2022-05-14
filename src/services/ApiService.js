import  globalAxios from 'axios'

const ApiService = {}


export const axios = globalAxios.create({
    baseURL: 'https://app.themindinterest.com/admin', 
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')} :: ${localStorage.getItem('ip')}`
      }
    }
  )


  ApiService.getTransactions = async () => {
    const response = await axios.get( `/transactions`,);
    return response;
  };


  ApiService.getSessions = async () => {
    const response = await axios.get( `/sessions`,);
    return response;
  };

  ApiService.getRefunds = async () => {
    const response = await axios.get( `/refunds`,);
    return response;
  };
  

  
export default ApiService
