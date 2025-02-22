import React, {memo, useEffect} from "react";
import {Main} from "./main/main";
import {Homes} from "./homes/homes";
import {useNavigate} from "react-router-dom";
import {Preloader} from "./preloader";

export const HotelsApp = memo(() => {
    const navigate = useNavigate();


    useEffect(() => {
        navigate("/hotels")
    },[])

    return (
        <div className="app">
            <Preloader/>
            <Main/>
            <Homes/>
        </div>
    )
})