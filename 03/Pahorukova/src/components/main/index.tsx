import { FormEvent, ChangeEvent, useState } from "react";
import {Hotels} from "./Hotels";
import { TopSection } from "./TopSection/index";
import AvailableHotels from "./AvailableHotels/index";

const Main = () => {
  const [searchResult, setResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isSearchError, setSearchError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.toLowerCase());
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = 'https://fe-student-api.herokuapp.com/api/hotels?search=';

    if(searchValue !== '') {
      fetch(`${url}${searchValue}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setResult(data);
        setSearchValue('');
        setSearchError(false);
      });
    } else {
      setSearchError(true);
    }
  }

  return (
    <main>
      <TopSection value={searchValue} isError={isSearchError} onSubmit={handleSubmit} onChange={handleChange}/>
      <AvailableHotels searchResult={searchResult}/>
      <Hotels/>
    </main>
  )
 };
 
 export default Main;