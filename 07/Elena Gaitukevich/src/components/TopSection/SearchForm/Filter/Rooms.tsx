import { FilterPopupItem } from "./styles";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { roomsFilterAction } from "../../../../redux/searchFormFilter/actions";

export const Rooms = memo(() => {
  const [countRooms, setCountRooms] = useState<number>(1);
  const dispatch = useDispatch();
  dispatch(roomsFilterAction(countRooms));

  const roomsHandleClickMinus = (event: any) => {
    if (countRooms > 1 && countRooms <= 30) {
      event.preventDefault();
      setCountRooms(countRooms - 1);
    }
    event.preventDefault();
  };

  const roomsHandleClickPlus = (event: any) => {
    if (countRooms >= 1 && countRooms < 30) {
      event.preventDefault();
      setCountRooms(countRooms + 1);
    }
    event.preventDefault();
  };

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
