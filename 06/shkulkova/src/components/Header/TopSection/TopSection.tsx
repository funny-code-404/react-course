import { ChangeEvent, FormEvent } from "react";
import { DatePickerBlock } from "../HeaderDatepicker";
import { HotelParams } from "../HotelParams";
import Navigate from "../../Header/Navigate/Navigate";


type TopSectionProps = {
  value: string;
  handleSubmit: (param: FormEvent<HTMLFormElement>) => void;
  handleChange: (param: ChangeEvent<HTMLInputElement>) => void;
};

const TopSection = ({ value, handleChange, handleSubmit }: TopSectionProps) => {
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
            value={value}
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

export default TopSection;
