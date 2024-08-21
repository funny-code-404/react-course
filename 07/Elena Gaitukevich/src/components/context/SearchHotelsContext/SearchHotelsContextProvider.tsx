import { SearchHotelsContext } from "./SearchHotelsContext";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { THotel } from "../../Types/types";

type Props = {
  children: React.ReactNode;
};

export const urlSearchHotels =
  "https://fe-student-api.herokuapp.com/api/hotels?search=";

export const SearchHotelsContextProvider = ({ children }: Props) => {
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState<THotel[]>([]);
  const [url, setUrl] = useState<string>(urlSearchHotels);
  const [isClickedSearch, setClickedSearch] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setClickedSearch(false);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result));
  }, [url]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUrl(urlSearchHotels + value);
    setClickedSearch(true);
  };
  return (
    <SearchHotelsContext.Provider
      value={{
        handleChange,
        handleSubmit,
        data,
        isClickedSearch,
        value,
      }}
    >
      {children}
    </SearchHotelsContext.Provider>
  );
};
