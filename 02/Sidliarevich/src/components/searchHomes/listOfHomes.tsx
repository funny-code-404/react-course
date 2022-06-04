import React from "react";
import { Data } from "../../data";
import { HomeItem } from "./homeItem";

type Props = {
    homes: Data[]
}

export const ListOfHomes = ({ homes }: Props) => {
    return (
        <div className="search-homes__content">
            {homes.map((home: Data) =>
                <HomeItem homes={home} key={home.id} />)
            }
        </div>
    )
}