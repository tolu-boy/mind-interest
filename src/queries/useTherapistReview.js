
import { useQuery} from "react-query";
import { axios } from "../services/ApiService";

const getTherapistReviews= async (id) => {
  const { data } = await axios.get(`/therapist-reviews/${id}`, );
  return data;
};

export default function useTherapistReviews(id) {
  return useQuery(['therapistReviews', id] ,() =>getTherapistReviews(id))

}
