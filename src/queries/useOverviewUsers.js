import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const searchUsersOverview = async (q) => {
  const { data } = await axios.get(`/search-overview-users?name=${q}` );
  return data;
};

export default function useUsersOverview (value) {
  return useQuery(['users', value], () => searchUsersOverview(value))

}
