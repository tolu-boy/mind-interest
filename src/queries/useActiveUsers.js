import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getActiveUsers = async () => {
  const { data } = await axios.get("/active-users" );
  return data;
};

export default function useActiveUsers() {
  return useQuery("ActiveUsers",  getActiveUsers);
}
