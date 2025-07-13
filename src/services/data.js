import { apiInvoker } from "../lib/apiInvoker";
import { END_POINT } from "../lib/apiURL";

export const data_fetch = () => {
  return apiInvoker(END_POINT.data.all_posts, "GET");
};
