import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Services from "../service/Services";

type Hotel = {
  id: string;
  name: string;
  city: string;
  country: string;
  imageUrl: string;
};

const HotelPage = () => {
  const params = useParams();
  const location: any = useLocation();

  const [hotel, setHotel] = useState<Hotel>();

  async function fetchHotels() {
    const response = await Services.getHotelById(params.id);
    const hotel = response.data;
    setHotel(hotel);
  }

  useEffect(() => {
    console.log(location.state);
    location.state ? setHotel(location.state as Hotel) : fetchHotels();
  }, []);

  return (
    <div>
      <div className="nav_container">
        <nav className="nav_block">
          <img className="nav_logo" src="/assets/icons/icon-logo.svg" alt="#" />
          <div className="nav_menu">
            <a className="nav_link nav_link-active">Stays</a>
            <a className="nav_link">Attractions</a>
            <a href="">
              <img
                className="nav_switch"
                src="/assets/icons/icon-theme-swith.png"
                alt="#"
              />
            </a>
            <a href="">
              <img
                className="nav_signin"
                src="/assets/icons/icon-sign-in.svg"
                alt="#"
              />
            </a>
          </div>
        </nav>
      </div>

      <div className="hotel_card">
        <div className="card_container">
          <img src={hotel?.imageUrl} alt="#" className="card__image" />
          <div className="card_text">
            <h2 className="card__title">{hotel?.name}</h2>
            <p className="card__subtitle">{`${hotel?.city}, ${hotel?.country}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
