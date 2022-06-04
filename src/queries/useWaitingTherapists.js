
import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getWaitingTherapits = async (q) => {
  const { data } = await axios.get(`/search-waiting-therapist?name=${q}` );
  return data;
};

export default function useWaitingTherapits(value) {    
  return useQuery(['waitingTherapists', value], () => getWaitingTherapits(value))

}




