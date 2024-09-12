import React, {memo, useContext} from "react";
import {ListOfHomes} from "./listOfHomes";
import {Data} from "../../../data";
import {config} from "../../config/locales/en";
import {DataContext} from "../../context/dataContext";

const {titles, texts} = config;

export const SearchHomes = memo(() => {

    const {data} = useContext(DataContext);

    if (data?.length) {
        return (
            <section className="search-homes wrapper">
                <div className="search-homes__header">
                    <h1 className="search-homes__title">{titles.searchHomes}</h1>
                </div>
                <ListOfHomes>
                    {data?.map((item:Data) => <ListOfHomes.Item state={item} to={item.id} homes={item} key={item.id}/>)}
                </ListOfHomes>
            </section>
        )
    } else {
        return (
            <section className="search-homes wrapper">
                <h2 className="search-homes__title search-homes__header">{texts.searchHomes}</h2>
            </section>
        )
    }

})