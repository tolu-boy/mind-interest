import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getTransactions = async () => {
  const { data } = await axios.get("/transactions", );
  return data;
};

export default function useTransactions() {
  return useQuery("transactions",  getTransactions);
}
