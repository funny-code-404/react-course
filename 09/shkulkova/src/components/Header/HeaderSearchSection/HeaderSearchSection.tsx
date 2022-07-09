import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { DatePickerBlock } from "../HeaderDatepicker";
import { HotelParams } from "../HeaderHotelParams/HotelParams";
import Navigate from "../Navigate/Navigate";
import { actionSetSearch } from "../../redux/headerSerchSection/actions";
import { actionGetHotelsRequested } from "../../redux/availableHotels/actions";

const SearchSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchPreviousValue, setSearchPreviousValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchPreviousValue !== searchValue) {
      dispatch(actionSetSearch(searchValue));
      dispatch(actionGetHotelsRequested());
    }
    setSearchPreviousValue(searchValue);
    setSearchValue("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)

  return (
    <header className="header">
      <div className="header_container">
        <Navigate />
        <h1 className="header_title">
          Discover stays to live, work or just relax
        </h1>
        <div className="search_form_titles">
          <h4 className="search_form_title_destination">
            Your destination or hotel name
          </h4>
          <h4 className="search_form_title_chekIn">Check-in — Check-out</h4>
        </div>
        <form className="header_search_form" onSubmit={handleSubmit}>
          <input
            className="search_form_input"
            placeholder="New York"
            value={searchValue}
            onChange={handleChange}
          />
          <DatePickerBlock />
          <HotelParams />
          <button className="search_form_button">Search</button>
        </form>
        <div className="header_download_block">
          <img
            className="download_google_play"
            src="./assets/icons/icon-google-play.svg"
            alt="#"
          />
          <img
            className="download_app_store"
            src="./assets/icons/icon-app-store.svg"
            alt="#"
          />
        </div>
      </div>
    </header>
  );
};

export default SearchSection;
