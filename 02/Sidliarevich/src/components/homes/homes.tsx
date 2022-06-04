import React from "react";
import { data } from "../../data"
import { HomeItem } from "./homeItem";
import {Data} from "../../data";

const title: string = "Homes guests loves";

export const Homes = () => {
    return (
        <section className="homes wrapper">
            <h1 className="homes__title">{title}</h1>
            <div className="homes__content">
                {data.map((home: Data) =>
                    <HomeItem homes={home} key={home.id} />)
                }
            </div>
        </section>
    )
}