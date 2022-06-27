import { useState } from "react";
import { useSelector } from "react-redux";
import { Adults } from "./Adults";
import { Children } from "./Children";
import { Rooms } from "./Rooms";

export const HotelParams = () => {
  const [isOpen, setIsOpen] = useState(false);

  const adults: number = useSelector((state: any) => state.filter.adults);
  const children: number = useSelector((state: any) => state.filter.children);
  const rooms: number = useSelector((state: any) => state.filter.rooms);

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
        </div>
      )}
    </div>
  );
};
