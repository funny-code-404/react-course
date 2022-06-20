import React, {useEffect, useState} from "react";
import { HomeItem } from "./homeItem";
import { Data } from "../../data";
import {fetchData} from "../fetchData";
import {buildUrl} from "../config/buildUrl";
import {config} from "../config/locales/en";
const {titles} = config;


export const Homes = () => {
    const [data, setData] = useState<Data[]>([]);
    const [error, setError] = useState("")

    useEffect(() => {
        fetchData(buildUrl(""), setData, setError)
    },[])

    if (error) alert(error)
    return (
        <section className="homes wrapper">
            <h1 className="homes__title">{titles.homes}</h1>
            <div className="homes__content">
                {data?.map((home: Data) => <HomeItem homes={home} key={home.id} />)}
            </div>
        </section>
    )
}