import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getEarning = async () => {
  const { data } = await axios.get("/earning", );
  return data;
};

export default function useEarning() {
  return useQuery("earnings",  getEarning);
}
