import React, {memo} from "react";
import {Link} from "react-router-dom";
import {Data} from "../../homes/homes";

type Props = {
    homes: Data;
    to: string;
    state: Data;
}

export const HomeItem = memo(({homes, to, state}: Props) => {
    return (
        <Link className="home" state={state} to={`/hotels/${to}`}>
            <img className="home__image" src={homes.imageUrl} alt=""/>
            <p className="home__name">{homes.name}</p>
            <p className="home__location">{homes.city}, {homes.country}</p>
        </Link>
    );
});
