import React from 'react';
import { THomes } from '../../types/THomes';

const HomeItem = ({key, home}: {key: string, home: THomes}) => {
    return (
        <div>
            <article className='home'>
                <img src={home.imageUrl} alt={home.name} className='home__image'/>
                <h4 className='home__title'>{home.name}</h4>
                <p className='home__subtitle'>{home.city}, {home.country}</p>
            </article>
        </div>
    );
};

export default HomeItem;