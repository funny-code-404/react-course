import { count } from "console";
import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterAdultsAction } from "../../redux/headerFormParams/actions";

export const Adults = memo(() => {
  const [countAdults, setCountAdults] = useState(0);
  const dispatch = useDispatch();

//   
useEffect(() => {
  dispatch(filterAdultsAction(countAdults));
}, [countAdults])

  const handleClickMinusAdult = (e: any) => {
    if (countAdults > 0 && countAdults < 30) {
      e.preventDefault();
      setCountAdults(countAdults - 1);
    }
    e.preventDefault();
  };

  const handleClickPlusAdult = (e: any) => {
    if (countAdults >= 0 && countAdults < 30) {
      e.preventDefault();
      setCountAdults(countAdults + 1);
    }
    e.preventDefault();
  };

  return (
    <div className="params_item">
      <p className="params_item_title">Adults</p>
      <div className="item_counter">
        <button
          className="params_item_btn"
          onClick={handleClickMinusAdult}
        >
          -
        </button>
        <p className="params_item_number">{countAdults}</p>
        <button
          className="params_item_btn"
          onClick={handleClickPlusAdult}
        >
          +
        </button>
      </div>
    </div>
  );
});
