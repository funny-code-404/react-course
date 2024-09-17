import { FilterPopupItem } from "./styles";
import { FilterContext } from "../../../context/filterContext";
import { useContext, memo } from "react";

export const Adults = memo(() => {
  const { countAdults, adultsHandleClickMinus, adultsHandleClickPlus } =
    useContext(FilterContext);

  return (
    <FilterPopupItem>
      <h4 className="item__title">Adults</h4>
      <span className="item__container">
        <button
          onClick={adultsHandleClickMinus}
          className="item__button"
          value={countAdults}
        >
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
