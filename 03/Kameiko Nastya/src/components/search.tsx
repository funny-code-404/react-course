import { useState, useEffect } from "react";


const url = 'https://fe-student-api.herokuapp.com/api/hotels'

export const Search = () => {
    const  [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [value, setValue] = useState('');

    const buildUrl = (searchValue: string):string => `${url}?search=${searchValue}`

    const fetchData = async (
       /////
    ) =>{
        try {
            const response = await fetch (url);
            const res = await response.json();

            setData(res);
        } catch (e: any) {
            setError(e.message);
        }
    };

    const handleChange = (e: any) => {
        setValue(e.target.value);
    };

    const handelSubmit = (e: any) => {
        fetchData(buildUrl(value), setData, setError);
    };

    useEffect (() => {
        // fetchData(buildUrl(value), setData, setError);
    }, []);

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input value={value} onChange={handleChange} />
                <button>send</button>
            </form>
            <ul>
                {data.map((hotel:any ) => <li key={hotel.id}>{hotel.name}</li>)}
            </ul>
        </div>
    )
};