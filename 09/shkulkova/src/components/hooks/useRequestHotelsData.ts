import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  actionGetHotelsSucceed,
  actionGetHotelsRequested,
  actionGetHotelsFailed,
} from "../redux/availableHotels/actions";
import {
  HotelsDataSelector,
  HotelsLoadingSelector,
  HotelsErrorSelector,
} from "../redux/availableHotels/selectors";

export const useRequestHotelsData = () => {
  const dispatch = useDispatch();
  const data = useSelector(HotelsDataSelector);
  const loading = useSelector(HotelsLoadingSelector);
  const error = useSelector(HotelsErrorSelector);

  useEffect(() => {
    if (data === null) {
      dispatch(actionGetHotelsRequested());
      fetch("https://fe-student-api.herokuapp.com/api/hotels")
        .then((data) => data.json())
        .then((data: any) => {
          dispatch(actionGetHotelsSucceed(data));
          console.log(data)
        })
        .catch((error) => {
          dispatch(actionGetHotelsFailed(error));
        });
    }
  }, [data, loading, error]);
  return { data, loading, error };
};
