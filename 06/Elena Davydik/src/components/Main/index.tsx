import { THotel } from "../Types/types";
import { AvailableHotels } from "./AvailableHotels";
import { PopularHotels } from "./PopularHotels/PopularHotels";

export const Main = () => {
  return (
    <main>
      <AvailableHotels />
      <PopularHotels />
    </main>
  );
};
