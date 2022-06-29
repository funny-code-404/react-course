import React from "react";
import { Homes } from "./components/homes/homes"
import { Main } from "./components/main/main";
import {DataContextProvider} from "./components/context/dataContextProvider";

export function App() {

    return (
    <DataContextProvider>
        <div className="app">
            <Main />
            <Homes />
        </div>
    </DataContextProvider>
  );
}
