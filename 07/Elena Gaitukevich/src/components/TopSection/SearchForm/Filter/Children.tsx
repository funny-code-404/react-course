import { FilterPopupItem } from "./styles";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { childrenFilterAction } from "../../../../redux/searchFormFilter/actions";

export const Children = memo(() => {
  const [countChildren, setCountChildren] = useState<number>(0);
  const dispatch = useDispatch();
  dispatch(childrenFilterAction(countChildren));

  const childrenHandleClickMinus = (event: any) => {
    if (countChildren > 0 && countChildren <= 30) {
      event.preventDefault();
      setCountChildren(countChildren - 1);
    }
    event.preventDefault();
  };

  const childrenHandleClickPlus = (event: any) => {
    if (countChildren >= 0 && countChildren < 30) {
      event.preventDefault();
      setCountChildren(countChildren + 1);
    }
    event.preventDefault();
  };

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
