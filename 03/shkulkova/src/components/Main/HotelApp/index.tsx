import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import Form from "../../Header/HotelsForm";
import { List } from "../HotelList";
import { fetchData } from "../FetchData";
import { usePrevious } from "../Hooks";
import OfferSection from "../OfferSection";

const url = "https://fe-student-api.herokuapp.com/api/hotels";

type Hotel = {
  id: number | string;
  name: string;
  city: string;
  country: string;
  imageUrl: string;
};

export const HotelApp = () => {
  const [data, setData] = useState<Hotel[]>([]);
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  const buildUrl = (searchValue: string) => `${url}?search=${searchValue}`;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const prevValue = usePrevious(value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (prevValue !== value) {
      const passedUrl = buildUrl(value);

      fetchData(passedUrl, setData, setError);
      setValue("");
    }
  };

  useEffect(() => {
    const passedUrl = buildUrl(value);

    fetchData(passedUrl, setData, setError);
  }, []);

  return (
    <div>
      <Form
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <OfferSection />
      <List data={data} />
    </div>
  );
};
