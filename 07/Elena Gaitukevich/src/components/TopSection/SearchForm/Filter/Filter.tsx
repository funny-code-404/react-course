import { useState } from "react";
import { InputFilter, FilterPopup } from "./styles";
import { Adults } from "./Adults";
import { Children } from "./Children";
import { Rooms } from "./Rooms";
import { ChildrenAge } from "./ChildrenAge";
import { useSelector } from "react-redux";

type FilterStatesType = {
  filter: {
    adults: number;
    children: number;
    rooms: number;
  };
};

export const Filter = () => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const adults: number = useSelector(
    (state: FilterStatesType) => state.filter.adults
  );
  const children: number = useSelector(
    (state: FilterStatesType) => state.filter.children
  );
  const rooms: number = useSelector(
    (state: FilterStatesType) => state.filter.rooms
  );

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
