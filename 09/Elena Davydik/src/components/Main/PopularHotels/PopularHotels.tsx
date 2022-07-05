import { ErrorBlock } from "../../ErrorBlock";
import { Loader } from "../../Loader";
import { GetPopularHotels } from "./GetPopularHotels";
import { useSelector } from "react-redux";
import {
  errorSelector,
  isLoadingSelector,
} from "../../../redux/popularHotels/selectors";

export function PopularHotels() {
  const error = useSelector(errorSelector);
  const isLoading = useSelector(isLoadingSelector);

  if (error) {
    return <ErrorBlock />;
  } else if (isLoading) {
    return <Loader />;
  } else {
    return <GetPopularHotels />;
  }
}
