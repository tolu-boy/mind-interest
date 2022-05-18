import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getSuspendedUsers = async () => {
  const { data } = await axios.get("/suspended-users", );
  return data;
};

export default function useSuspendedUsers() {
  return useQuery("SuspendedUsers",  getSuspendedUsers);
}
