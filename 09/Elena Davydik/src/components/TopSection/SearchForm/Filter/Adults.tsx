import { FilterPopupItem } from "./styles";
import { memo, useState, useEffect, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { adultsFilterAction } from "../../../../redux/searchFormFilter/actions";

export const Adults = memo(() => {
  const [countAdults, setCountAdults] = useState<number>(2);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(adultsFilterAction(countAdults));
  }, [countAdults, dispatch]);

  const adultsHandleClickMinus = (event: MouseEvent<HTMLButtonElement>) => {
    if (countAdults > 0 && countAdults <= 30) {
      event.preventDefault();
      setCountAdults(countAdults - 1);
    }
    event.preventDefault();
  };

  const adultsHandleClickPlus = (event: MouseEvent<HTMLButtonElement>) => {
    if (countAdults >= 0 && countAdults < 30) {
      event.preventDefault();
      setCountAdults(countAdults + 1);
    }
    event.preventDefault();
  };

  return (
    <FilterPopupItem>
      <h4 className="item__title">Adults</h4>
      <span className="item__container">
        <button onClick={adultsHandleClickMinus} className="item__button">
          -
        </button>
        <p className="item__subtitle">{countAdults}</p>
        <button onClick={adultsHandleClickPlus} className="item__button">
          +
        </button>
      </span>
    </FilterPopupItem>
  );
});
