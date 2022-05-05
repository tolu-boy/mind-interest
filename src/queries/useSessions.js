import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getSessions= async () => {
  const { data } = await axios.get("/sessions", );
  return data;
};

export default function useSessions() {
  return useQuery("sessions",  getSessions);
}
