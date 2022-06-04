import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getSuspendedTherapists = async (q) => {
  const { data } = await axios.get(`/search-suspended-therapist?name=${q}`, );
  return data;
};

export default function useSuspendedTherapists(value) {
  return useQuery(['SuspendedTherapists', value], () => getSuspendedTherapists(value))
}
