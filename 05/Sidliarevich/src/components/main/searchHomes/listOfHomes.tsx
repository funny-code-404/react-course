import React from "react";
import {HomeItem} from "./homeItem";

type Props = {
    children: React.ReactNode;
}

export const ListOfHomes = ({children}: Props) => {
    return <div className="search-homes__content">{children}</div>
}

ListOfHomes.Item = HomeItem;