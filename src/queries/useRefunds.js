import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getRefunds = async () => {
  const { data } = await axios.get("/refunds", );
  return data;
};

export default function useRefunds() {
  return useQuery("refunds",  getRefunds);
}
