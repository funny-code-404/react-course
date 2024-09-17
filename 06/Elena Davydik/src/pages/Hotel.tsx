import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { HeaderForPages } from "../components/UI/HeaderForPages";
import {
  HotelInfo,
  HotelContent,
  HotelPhoto,
  HotelDescription,
  HotelName,
  HotelLocation,
} from "./hotel-styles";
import { Footer } from "../components/Footer/index";

export const Hotel = () => {
  const location: any = useLocation();
  const params: any = useParams();
  const [data, setData] = useState(location.state);

  useEffect(() => {
    if (!location.state) {
      fetch(`https://fe-student-api.herokuapp.com/api/hotels${params.id}`).then(
        (response) => response.json().then((data) => setData(data))
      );
    }
  }, [location.state, params.id]);

  return (
    <div>
      <HeaderForPages />

      <HotelInfo>
        <HotelContent className="container block">
          <HotelPhoto src={data?.imageUrl} alt={data?.name} />
          <HotelDescription>
            <HotelName>{data?.name}</HotelName>
            <HotelLocation>
              {data?.city}, {data?.country}
            </HotelLocation>
          </HotelDescription>
        </HotelContent>
      </HotelInfo>

      <Footer />
    </div>
  );
};
