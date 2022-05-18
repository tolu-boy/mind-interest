import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getSingleUser = async (id) => {
  const { data } = await axios.get(`/user/${id}`, );
  return data;
};

export default function useSingleUser (id) {
//   return useQuery("SingleTherapist",  getSingleTherapist(id));
  return useQuery(['SingleTherapist', id] ,() =>getSingleUser(id))

}
