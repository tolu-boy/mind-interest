import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getActiveUsers = async (q) => {
  const { data } = await axios.get(`/search-active-users?name=${q}` );
  return data;
};

export default function useActiveUsers(value) {
  return useQuery(['ActiveUsers', value], () => getActiveUsers(value))

}
