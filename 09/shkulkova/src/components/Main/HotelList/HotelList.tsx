import { Link } from "react-router-dom";

import { HotelType } from "../../redux/availableHotels/actions";
import { useRequestHotelsData } from "../../hooks/useRequestHotelsData";

export type Hotel = {
  id: number | string;
  name: string;
  city: string;
  country: string;
  imageUrl: string;
};

export function HotelsList() {
  const { data } = useRequestHotelsData();


  console.log(data)
  return (
    <main className="main">
      <section className="main_available_hotels">
        <div className="main_container">
        <div>
          <h2 className="available_hotels_title">Available hotels</h2>
        </div>
        <ul className="available_hotels_list">
          {data?.map((hotel: HotelType) => (
            <li className="hotels_list_item" key={hotel.id}>
              <Link to={`/hotels/${hotel.id}`}>
                <img
                  className="hotels_list_item_image"
                  src={hotel.imageUrl}
                  alt="#"
                />
                <p className="hotels_list_item_name">{hotel.name}</p>
                <p className="hotels_list_item_location">
                  {hotel.city}, {hotel.country}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </section>
    </main>
  );
}

