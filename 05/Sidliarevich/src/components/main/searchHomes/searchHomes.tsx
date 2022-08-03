import React, {memo} from "react";
import {ListOfHomes} from "./listOfHomes";
import {Data} from "../../../data";
import {config} from "../../config/locales/en";

const {titles, texts} = config;

type Props = { data: Data[] }

export const SearchHomes = memo(({data}: Props) => {

    if (data?.length) {
        return (
            <section className="search-homes wrapper">
                <div className="search-homes__header">
                    <h1 className="search-homes__title">{titles.searchHomes}</h1>
                </div>
                <ListOfHomes>
                    {data?.map(item => <ListOfHomes.Item homes={item} key={item.id}/>)}
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