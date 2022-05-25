import React from 'react';
import HomeItem from './HomeItem';
import { THomes } from '../../types/THomes';

type Homes = {
    homes: THomes[],
    title: string,
};

const HomesBlock: React.FC<Homes> = ({homes, title}: Homes) => {
    return (
        <section className='homes'>
            <div className='container homes__container'>
                <h2 className='homes__title'>{title}</h2>
                <div className='homes__items'>
                    {homes.map((home: THomes) => <HomeItem key={home.id} home={home}/>)}
                </div>
            </div>
        </section>
    );
};

export default HomesBlock;