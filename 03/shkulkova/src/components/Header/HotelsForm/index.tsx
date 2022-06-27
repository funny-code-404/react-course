
import { ChangeEvent, FormEvent } from "react";

type FormProps = {
  value: string;
  handleSubmit: (param: FormEvent<HTMLFormElement>) => void;
  handleChange: (param: ChangeEvent<HTMLInputElement>) => void;
};

const Form = ({ value, handleChange, handleSubmit }: FormProps) => {
  return (
    <header className="header">
      <nav className="header_nav">
        <img className="nav_logo" src="./assets/icons/icon-logo.svg" alt="#" />
        <div className="nav_menu">
          <p className="nav_subtitle nav_subtitle-active">Stays</p>
          <p className="nav_subtitle">Attractions</p>
          <img
            className="nav_switch"
            src="./assets/icons/icon-theme-swith.png"
            alt="#"
          />
          <img
            className="nav_signin"
            src="./assets/icons/icon-sign-in.svg"
            alt="#"
          />
        </div>
      </nav>
      <h1 className="header_title">
        Discover stays to live, work or just relax
      </h1>
      <form className="header_search_form" onSubmit={handleSubmit}>
        <input
          className="search_form_input"
          placeholder="Your destination or hotel name"
          value={value}
          onChange={handleChange}
        />
        <button className="search_form_button">Search</button>
      </form>
      <div className="header_download_block">
        <img className="download_google_play" src="./assets/icons/icon-google-play.svg" alt="#" />
        <img className="download_app_store" src="./assets/icons/icon-app-store.svg" alt="#" />
      </div>
    </header>
  );
};

export default Form;