import React from "react";
import { Homes } from "./components/homes/homes"
import { SearchHomes } from "./components/searchHomes/searchHomes";
import { data } from "./data";

export function App() {

  return (
    <div className="app">
      <Homes />
      <SearchHomes homes={ data }/>
    </div>
  );
}

