import { useState, useContext } from "react";
import { InputFilter, FilterPopup } from "./styles";
import { Adults } from "./Adults";
import { Children } from "./Children";
import { Rooms } from "./Rooms";
import { FilterContext } from "../../../context/filterContext";
import { ChildrenAge } from "./ChildrenAge";

export const Filter = () => {
  const { countAdults, countChildren, countRooms } = useContext(FilterContext);
  const [isClick, setIsClick] = useState<boolean>(false);

  const handleClick = () => setIsClick(!isClick);

  return (
    <div>
      <InputFilter isClick={isClick} onClick={handleClick}>
        <p className="inputFilter__text">
          {countAdults} Adults - {countChildren} Children - {countRooms} Room
        </p>
      </InputFilter>
      {isClick && (
        <FilterPopup>
          <Adults />
          <Children />
          <Rooms />
          {countChildren > 0 && <ChildrenAge />}
        </FilterPopup>
      )}
    </div>
  );
};
