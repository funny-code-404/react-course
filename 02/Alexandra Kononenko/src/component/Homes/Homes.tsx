import HomesItem from '../HomesItem/HomesItem';
import data from '../../data/data';
import { SearchList } from '../SearchList/SearchList';

const Homes = () => {
    return (
        <section className="homes container">
            <h2 className="homes__title">Homes guests loves</h2>
            <SearchList homes={data}/>
            {/*<ul className="homes__items">
                {data.map((home) =>(
                    <HomesItem key={home.id} home={home}/>
                ))}
                </ul>*/}
        </section>
    )
};

export default Homes;
