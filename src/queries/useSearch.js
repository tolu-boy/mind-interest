import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getSearch= async (q) => {
  const { data } = await axios.get(`/search?name=${q}`);


  return data;
};

export default function useSearch(value) {

  return useQuery(['search', value], () => getSearch(value))

}


