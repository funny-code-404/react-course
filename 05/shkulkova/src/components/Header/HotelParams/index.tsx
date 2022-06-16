import { useState } from "react";

export const HotelParams = () => {
  const [opened, setOpened] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  return (
    <>
      <button className="params_button" onClick={() => setOpened(!opened)}>
        {adults} Adults — {children} Children — {rooms} Room
      </button>
      {opened && (
        <div className="params_container">
          <div className="params_item">
            <p className="params_item_title">Adults</p>
            <div className="item_counter">
              <button
                className="params_item_btn"
                onClick={() => setAdults(adults - 1)}
              >
                -
              </button>
              <p className="params_item_number">{adults}</p>
              <button
                className="params_item_btn"
                onClick={() => setAdults(adults + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="params_item">
            <p className="params_item_title">Children</p>
            <div className="item_counter">
              <button
                className="params_item_btn"
                onClick={() => setChildren(children - 1)}
              >
                -
              </button>
              <p className="params_item_number">{children}</p>
              <button
                className="params_item_btn"
                onClick={() => setChildren(children + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="params_item">
            <p className="params_item_title">Rooms</p>
            <div className="item_counter">
              <button
                className="params_item_btn"
                onClick={() => setRooms(rooms - 1)}
              >
                -
              </button>
              <p className="params_item_number">{rooms}</p>
              <button
                className="params_item_btn"
                onClick={() => setRooms(rooms + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
