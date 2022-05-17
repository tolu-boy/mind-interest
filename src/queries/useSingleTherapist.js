import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getSingleTherapist = async (id) => {
  const { data } = await axios.get(`/therapist/${id}`, );
  return data;
};

export default function useSingleTherapist(id) {
//   return useQuery("SingleTherapist",  getSingleTherapist(id));
  return useQuery(['SingleTherapist', id] ,() =>getSingleTherapist(id))

}
