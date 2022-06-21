import {TopSection} from "./topSection/topSection";
import {SearchHomes} from "./searchHomes/searchHomes";
import React, {ChangeEvent, FormEvent, memo, useEffect, useState} from "react";
import {Data} from "../../data";
import {fetchData} from "../fetchData";
import {buildUrl} from "../config/buildUrl";

export const Main = memo(() => {

    const [data, setData] = useState<Data[]>([])
    const [value, setValue] = useState("");
    const [error, setError] = useState("")


    useEffect(() => {
        fetchData(buildUrl(value), setData, setError)
    },[]);


    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (value.trim()) {
            fetchData(buildUrl(value), setData, setError)
            setValue("")
        }
    };

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        console.log("pererisovka")
    };


    return  <main>
                <TopSection value={value} onChange={handleChange} onSubmit={handleSubmit}/>
                <SearchHomes data={data} />
            </main>
})

