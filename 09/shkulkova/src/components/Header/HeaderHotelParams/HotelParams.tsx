import { useState } from "react";
import { useSelector } from "react-redux";
import { Adults } from "./Adults";
import { Children } from "./Children";
import { Rooms } from "./Rooms";
import SelectChidrenAge from "./ChildrenAge";
import { TypeiInitialState } from "../../store/store"
import { searchSectionAdultsSelector } from "../../redux/headerSerchSection/selectors";
import { searchSectionChildrenSelector } from "../../redux/headerSerchSection/selectors";
import { searchSectionRoomsSelector } from "../../redux/headerSerchSection/selectors";

export const HotelParams = () => {
  const [isOpen, setIsOpen] = useState(false);

  const adults = useSelector(searchSectionAdultsSelector);
  const children = useSelector(searchSectionChildrenSelector);
  const rooms = useSelector(searchSectionRoomsSelector);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="params_block">
      <button className="params_button" onClick={handleClick}>
        {adults} Adults — {children} Children — {rooms} Rooms
      </button>
      {isOpen && (
        <div className="params_container">
          <Adults />
          <Children />
          <Rooms />
          <SelectChidrenAge />
          {/* {children.length > 0 && <SelectChidrenAge />} */}
        </div>
      )}
    </div>
  );
};
