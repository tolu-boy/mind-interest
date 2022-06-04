import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getDevices = async () => {
  const { data } = await axios.get("/devices", );
  return data;
};

export default function useDevices() {
  return useQuery("devices",  getDevices);
}
