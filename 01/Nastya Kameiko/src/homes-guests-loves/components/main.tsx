import { data } from './data';

import '../styles/index.scss'

type Data = {
      id: string,
      name: string,
      city: string,
      country: string,
      imageUrl: string,
    };

const Main = () => {
    return <ul className='hotel-ul'> 
         {data.map((data: Data) => (
            <li className='hotel-li' key={data.id} >
                <img src={data.imageUrl} />
                <h1> {data.name} </h1>
                <p> {data.city} , {data.country}</p>
            </li>
        ))}
        </ul>
   };
   
   export default Main; 