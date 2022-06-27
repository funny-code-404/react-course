import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterChildrenAction } from "../../redux/headerFormParams/actions";

export const Children = memo(() => {
  const [countChildren, setCountChildren] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(filterChildrenAction(countChildren));

  }, [countChildren])

  const handleClickMinusChild = (e: any) => {
    if (countChildren > 0 && countChildren < 30) {
      e.preventDefault();
      setCountChildren(countChildren - 1);
    }
    e.preventDefault();
  };

  const handleClickPlusChild = (e: any) => {
    if (countChildren >= 0 && countChildren < 30) {
      e.preventDefault();
      setCountChildren(countChildren + 1);
    }
    e.preventDefault();
  };

  return (
    <div className="params_item">
      <p className="params_item_title">Children</p>
      <div className="item_counter">
        <button className="params_item_btn" onClick={handleClickMinusChild}>
          -
        </button>
        <p className="params_item_number">{countChildren}</p>
        <button className="params_item_btn" onClick={handleClickPlusChild}>
          +
        </button>
      </div>
    </div>
  );
});