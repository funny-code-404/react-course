import { useState } from "react";
import { InputFilter, FilterPopup } from "./styles";
import { Adults } from "./Adults";
import { Children } from "./Children";
import { Rooms } from "./Rooms";
import { ChildrenAge } from "./ChildrenAge";
import {
  adultsSelector,
  childrenSelector,
  roomsSelector,
} from "../../../../redux/searchFormFilter/selectors";
import { useSelector } from "react-redux";

export const Filter = () => {
  const adults = useSelector(adultsSelector);
  const children = useSelector(childrenSelector);
  const rooms = useSelector(roomsSelector);

  const [isClick, setIsClick] = useState<boolean>(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div>
      <InputFilter isClick={isClick} onClick={handleClick}>
        <p className="inputFilter__text">
          {adults} Adults - {children} Children - {rooms} Room
        </p>
      </InputFilter>
      {isClick && (
        <FilterPopup>
          <Adults />
          <Children />
          <Rooms />
          {children > 0 && <ChildrenAge />}
        </FilterPopup>
      )}
    </div>
  );
};
