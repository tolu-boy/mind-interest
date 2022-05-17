

import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getApprovedTherapists = async () => {
  const { data } = await axios.get("/active-therapists", );
  return data;
};

export default function useApprovedTherapists() {
  return useQuery("ApprovedTherapists",  getApprovedTherapists);
}
