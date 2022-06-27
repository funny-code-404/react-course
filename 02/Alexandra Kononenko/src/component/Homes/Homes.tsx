import HomesItem from '../HomesItem/HomesItem';
import data from '../../data/data';
import { SearchList } from '../SearchList/SearchList';

const Homes = () => {
    return (
        <section className="homes container">
            <h2 className="homes__title">Homes guests loves</h2>
            <SearchList homes={data}/>
        </section>
    )
};

export default Homes;
