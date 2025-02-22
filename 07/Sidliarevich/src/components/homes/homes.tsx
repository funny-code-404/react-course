import React, {memo} from "react";
import {HomeItem} from "./homeItem";
import {config} from "../config/locales/en";
import {useRequestPopularHotels} from "../../hooks/useRequestPopularHotels";

export type Data = {
    id: string;
    name: string;
    city: string;
    country: string;
    imageUrl: string;
}

export const Homes = memo(() => {
    const {titles} = config;
    const {data, error} = useRequestPopularHotels()

    if (error) alert(error);
    return (
        <section className="homes wrapper">
            <h1 className="homes__title">{titles.homes}</h1>
            <div className="homes__content">
                {data?.map((home: Data) => <HomeItem homes={home} key={home.id}/>)}
            </div>
        </section>
    )
})