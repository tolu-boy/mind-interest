
import { useMutation } from "react-query";
import { axios } from "../services/ApiService";



const rejectTherapists = async (id) => {
    const {data} = await axios.patch( `/suspend-therapist/${id}`);
    return data
  }



  export default function useRejectTherapist(value) {
    return useMutation(rejectTherapists(value));
  
  }