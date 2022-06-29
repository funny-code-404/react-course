import { Navigation } from "./navigation";
import { SearchForm } from "./form/searchForm";
import React from "react";
import { config } from "../../config/locales/en"
const { titles, subtitles: {topSection} } = config;

export const TopSection = () => {

    // type Props ={
//     onChange: (event: ChangeEvent<HTMLInputElement>) => void;
//     onSubmit: (event: FormEvent<HTMLFormElement>) => void;
//     value: string;
// }

    return (
        <section className="top-section">
            <div className="container">
                <Navigation />
                <h2 className="top-section__title">{titles.topSection}</h2>
                <div className="top-section__form-description">
                    <h4 className="top-section__description">{topSection.detination}</h4>
                    <h4 className="top-section__description">{topSection.date}</h4>
                </div>
                <SearchForm />
                <div className="top-section__buttons-block">
                    <button className="top-section__google-play-btn"></button>
                    <button className="top-section__app-store-btn"></button>
                </div>
            </div>
        </section>
    )
}