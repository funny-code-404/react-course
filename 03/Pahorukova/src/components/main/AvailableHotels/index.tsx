import List from "./List";

export type Hotel = {
  id: string,
  name: string,
  city: string,
  country: string,
  imageUrl: string,
};

type Props = {
  searchResult: Hotel[];
};


const AvailableHotels = ({searchResult}: Props) => {
  return (
    <div className="available-hotels">
      <h2 className="title-h2 available-hotels__title">Available hotels</h2>
      <List data ={searchResult}/>
    </div>
  )
};

export default AvailableHotels;