import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getStatements= async () => {
  const { data } = await axios.get("/statement", );
  return data;
};

export default function useStatements() {
  return useQuery("Statements",  getStatements);
}
