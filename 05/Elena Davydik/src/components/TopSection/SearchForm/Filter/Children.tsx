import { FilterPopupItem } from "./styles";
import { FilterContext } from "../../../context/filterContext";
import { useContext, memo } from "react";

export const Children = memo(() => {
  const { countChildren, childrenHandleClickMinus, childrenHandleClickPlus } =
    useContext(FilterContext);

  return (
    <FilterPopupItem>
      <h4 className="item__title">Children</h4>
      <span className="item__container">
        <button onClick={childrenHandleClickMinus} className="item__button">
          -
        </button>
        <p className="item__subtitle">{countChildren}</p>
        <button onClick={childrenHandleClickPlus} className="item__button">
          +
        </button>
      </span>
    </FilterPopupItem>
  );
});
