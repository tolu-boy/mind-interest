

import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getApprovedTherapists = async (q) => {
  const { data } = await axios.get(`/search-active-therapist?name=${q}`, );
  return data;
};

export default function useApprovedTherapists(value) {
  return useQuery(['ApprovedTherapists', value], () => getApprovedTherapists(value))
}
