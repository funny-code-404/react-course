import { ChangeEvent, FormEvent, useEffect } from "react";
import { HotelsSearchForm } from "./HotelsSearchForm";
import { SearchForm } from "./styles";
import { useSelector } from "react-redux";
import {
  inputValueSelector,
  isClickedSelector,
  urlSelector,
} from "../../../../redux/availableHotels/selectors";
import { useDispatch } from "react-redux";
import {
  actionInputValue,
  actionIsClicked,
  actionUrl,
  actionClearAvailableData,
} from "../../../../redux/availableHotels/actions";
import {
  dateFromSelector,
  dateToSelector,
} from "../../../../redux/datePicker/selectors";
import {
  adultsSelector,
  childrenSelector,
  roomsSelector,
} from "../../../../redux/searchFormFilter/selectors";
import { getSearchParams } from "./getSearchParams";
import { actionGetAvailableHotelsRequested } from "../../../../redux/availableHotels/actions";

export const HotelsSearchFormList = () => {
  const dispatch = useDispatch();
  const value = useSelector(inputValueSelector);
  const url = useSelector(urlSelector);
  const isClicked = useSelector(isClickedSelector);
  const dateFrom = useSelector(dateFromSelector);
  const dateTo = useSelector(dateToSelector);
  const adults = useSelector(adultsSelector);
  const children = useSelector(childrenSelector);
  const rooms = useSelector(roomsSelector);

  useEffect(() => {
    isClicked && dispatch(actionGetAvailableHotelsRequested());
  }, [url, isClicked, dispatch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(actionInputValue(event.target.value));
    !event.target.value && dispatch(actionClearAvailableData());
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      actionUrl(
        url +
          getSearchParams(
            value,
            dateFrom?.toISOString(),
            dateTo?.toISOString(),
            adults,
            children,
            rooms
          )
      )
    );

    dispatch(actionIsClicked(true));
  };

  return (
    <SearchForm className="searchForm">
      <HotelsSearchForm onSubmit={handleSubmit} onChange={handleChange} />
    </SearchForm>
  );
};
