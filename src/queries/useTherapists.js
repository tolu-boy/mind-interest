import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getTherapists= async (q) => {
  const { data } = await axios.get(`/therapists?query=${q}`, );
  return data;
};

export default function useTherapists(value) {
//  return  useQuery(
//     ['therapists', value], 
//     () => getTherapists(value),
//     { enabled: Boolean(value) }
//   )
  // return useQuery("therapists",  getTherapists(value));
  return useQuery(['therapists', value], () => getTherapists(value))

}


