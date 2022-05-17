
import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getWaitingTherapits = async () => {
  const { data } = await axios.get("/waiting-therapists", );
  return data;
};

export default function useWaitingTherapits() {    
  return useQuery("waitingTherapists",  getWaitingTherapits);
}




