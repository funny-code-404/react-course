import React, {memo, useEffect} from "react";
import {Main} from "./main/main";
import {Homes} from "./homes/homes";
import {DataContextProvider} from "./context/dataContextProvider";
import {useNavigate} from "react-router-dom";

export const HotelsApp = memo(() => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/hotels")
    },[])

    return (
        <DataContextProvider>
            <div className="app">
                <Main/>
                <Homes/>
            </div>
        </DataContextProvider>
    )
})