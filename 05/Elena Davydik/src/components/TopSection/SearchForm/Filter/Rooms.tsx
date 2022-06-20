import { FilterPopupItem } from "./styles";
import { FilterContext } from "../../../context/filterContext";
import { useContext, memo } from "react";

export const Rooms = memo(() => {
  const { countRooms, roomsHandleClickMinus, roomsHandleClickPlus } =
    useContext(FilterContext);

  return (
    <FilterPopupItem>
      <h4 className="item__title">Rooms</h4>
      <span className="item__container">
        <button onClick={roomsHandleClickMinus} className="item__button">
          -
        </button>
        <p className="item__subtitle">{countRooms}</p>
        <button onClick={roomsHandleClickPlus} className="item__button">
          +
        </button>
      </span>
    </FilterPopupItem>
  );
});
