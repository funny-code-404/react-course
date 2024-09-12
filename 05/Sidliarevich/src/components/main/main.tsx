import {TopSection} from "./topSection/topSection";
import {SearchHomes} from "./searchHomes/searchHomes";
import React, {memo, useContext} from "react";
import {DataContext} from "../context/dataContext";

export const Main = memo(() => {

    const {data} = useContext(DataContext);

    return <main>
        <TopSection/>
        <SearchHomes data={data}/>
    </main>
})

