import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getPayouts = async () => {
  const { data } = await axios.get("/payouts", );
  return data;
};

export default function usePayouts() {
  return useQuery("Payouts",  getPayouts);
}
