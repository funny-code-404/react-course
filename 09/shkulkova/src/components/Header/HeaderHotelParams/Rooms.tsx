import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actionChangeRooms } from "../../redux/headerSerchSection/actions";

export const Rooms = memo(() => {
  const [countRooms, setCountRooms] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(actionChangeRooms(countRooms));
  }, [countRooms] )

  const handleClickMinusRoom = (e: any) => {
    if (countRooms > 1 && countRooms < 30) {
      e.preventDefault();
      setCountRooms(countRooms - 1);
    }
    e.preventDefault();
  };

  const handleClickPlusRoom = (e: any) => {
    if (countRooms >= 1 && countRooms < 30) {
      e.preventDefault();
      setCountRooms(countRooms + 1);
    }
    e.preventDefault();
  };

  return (
    <div className="params_item">
      <p className="params_item_title">Rooms</p>
      <div className="item_counter">
        <button className="params_item_btn" onClick={handleClickMinusRoom}>
          -
        </button>
        <p className="params_item_number">{countRooms}</p>
        <button className="params_item_btn" onClick={handleClickPlusRoom}>
          +
        </button>
      </div>
    </div>
  );
});
