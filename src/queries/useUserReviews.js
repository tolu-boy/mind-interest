

import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getUserReviews= async (id) => {
  const { data } = await axios.get(`/user-reviews/${id}`, );
  return data;
};

export default function useUserReviews(id) {
  return useQuery(['UserReviews', id] ,() =>getUserReviews(id))

}
