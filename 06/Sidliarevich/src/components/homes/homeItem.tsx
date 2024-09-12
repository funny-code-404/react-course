import React, {memo} from 'react';
import {Data} from "../../data";

type Props = {
    homes: Data;
}
export const HomeItem = memo(({homes}: Props) => {
    return (
        <div className="home">
            <img className="home__image" src={homes.imageUrl} alt={homes.name}/>
            <p className="home__name">{homes.name}</p>
            <p className="home__location">{homes.city}, {homes.country}</p>
        </div>
    );
});