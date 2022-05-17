import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getUsers = async () => {
  const { data } = await axios.get("/users", );
  return data;
};

export default function useUsers() {
  return useQuery("users",  getUsers);
}
