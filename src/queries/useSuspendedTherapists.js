import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getSuspendedTherapists = async () => {
  const { data } = await axios.get("/suspended-therapists", );
  return data;
};

export default function useSuspendedTherapists() {
  return useQuery("SuspendedTherapists",  getSuspendedTherapists);
}
