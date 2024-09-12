import {TopSection} from "./topSection/topSection";
import {SearchHomes} from "./searchHomes/searchHomes";
import React, {memo} from "react";

export const Main = memo(() => {

    return <main>
        <TopSection/>
        <SearchHomes/>
    </main>
})

