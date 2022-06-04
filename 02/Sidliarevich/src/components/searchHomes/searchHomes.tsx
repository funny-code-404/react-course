import {ChangeEvent, useState} from "react";
import { ListOfHomes } from "./listOfHomes";
import { SearchForm } from "./searchForm";
import {Data} from "../../data";

const title: string = "Available hotels";
type Props = {
    homes: Data[]
}

export const SearchHomes = ({ homes }:Props) => {

    const [data, filterData] = useState(homes);

    const onChange = (event: ChangeEvent<HTMLInputElement>):void => {
        filterData((homes.filter((home: { name: string }) => home.name.toLowerCase().includes(event.target.value.trim().toLowerCase()))))
    }

    return (
        <section className="search-homes wrapper">
            <div className="search-homes__header">
                <h1 className="search-homes__title">{title}</h1>
                <SearchForm onChange = {onChange} />
            </div>
            <ListOfHomes homes={ data }/>
        </section>
    )
}