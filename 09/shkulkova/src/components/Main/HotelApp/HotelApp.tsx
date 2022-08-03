import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import SearchSection from "../../Header/HeaderSearchSection/HeaderSearchSection";
import { HotelsList } from "../HotelList/HotelList";
import { fetchData } from "../FetchData";
import { usePrevious } from "../Hooks";
import OfferSection from "../OfferSection";

const url = "https://fe-student-api.herokuapp.com/api/hotels";

export type Hotel = {
  id: number | string;
  name: string;
  city: string;
  country: string;
  imageUrl: string;
};

export const HotelApp = () => {

  return (
    <div>
      <SearchSection />
      <OfferSection />
      <HotelsList />
    </div>
  );
};
