import { useFetchData } from "../../hooks/useFetchData";
import { ErrorBlock } from "../../ErrorBlock";
import { Loader } from "../../Loader";
import { GetPopularHotels } from "./GetPopularHotels";

export const urlPopularHotels = "https://fe-student-api.herokuapp.com/api/hotels/popular";

export function PopularHotels() {
  const { isLoaded, error } = useFetchData(urlPopularHotels);

  if (error) {
    return <ErrorBlock />;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return <GetPopularHotels />;
  }
}
