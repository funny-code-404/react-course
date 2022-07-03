import {useEffect, useState} from "react";
import { SearchList } from '../SearchList/SearchList';
import Api from '../Api/Api';


export const Homes = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        Api.fetchData(`https://fe-student-api.herokuapp.com/api/hotels?search=`, setData, setSearch);
    }, []);

    if (search) {
       alert(search);
    } 
    return (
        <section className="homes container">
            <h2 className="homes__title">Homes guests loves</h2>
            <SearchList homes={data} />
        </section>
    )
};

export default Homes;
