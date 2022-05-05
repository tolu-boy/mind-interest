import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getTherapists= async () => {
  const { data } = await axios.get("/therapists", );
  return data;
};

export default function useTherapists() {
  return useQuery("therapists",  getTherapists);
}
