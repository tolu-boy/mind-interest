

import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getActiveTherapists = async () => {
  const { data } = await axios.get(`/active-therapists`, );
  return data;
};

export default function useActiveTherapists(value) {
  return useQuery("ActiveTherapists",  getActiveTherapists);

}
