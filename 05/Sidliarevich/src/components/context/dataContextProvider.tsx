import {DataContext} from "./dataContext";
import {ChangeEvent, FormEvent, ReactNode, useEffect, useState} from "react";
import {Data} from "../../data";
import {fetchData} from "../fetchData";
import {buildUrl} from "../config/buildUrl";

type Props = {
    children: ReactNode
}

export const DataContextProvider = ({children}: Props) => {
    const [data, setData] = useState<Data[]>([])
    const [value, setValue] = useState("");
    const [error, setError] = useState("")

    useEffect(() => {
        fetchData(buildUrl(value), setData, setError)
    }, []);

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (value.trim()) {
            fetchData(buildUrl(value), setData, setError)
            setValue("")
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        console.log("pererisovka")
    };


    return <DataContext.Provider value={{data, value, error, handleSubmit, handleChange}}>
        {children}
    </DataContext.Provider>
}