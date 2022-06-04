import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getSuspendedUsers = async (q) => {
  const { data } = await axios.get(`/search-suspended-users?name=${q}`, );
  return data;
};

export default function useSuspendedUsers(value) {
  return useQuery(['SuspendedUsers', value], () => getSuspendedUsers(value))

}
