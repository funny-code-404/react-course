import { AvailableHotels } from "./AvailableHotels";
import { Offers } from "./Offers";
import { PopularHotels } from "./PopularHotels/PopularHotels";

export const Main = () => {
  return (
    <main>
      <AvailableHotels />
      <Offers />
      <PopularHotels />
    </main>
  );
};
