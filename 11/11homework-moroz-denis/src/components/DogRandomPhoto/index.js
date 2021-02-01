import { BASE_URL } from '../../services/api/dogs'
import { useEffect, useState } from 'react';

export const DogRandomPhoto = (props) => {

    const { breed } = props;

    const path = `${BASE_URL}` + '/breed/' + `${breed}` + '/images/random';

    const [dogPhoto, setData] = useState('');

    useEffect(async () => {
        const result = await fetch(path);
        const { message: data } = await result.json();
        setData(data)
      }, []); 

    return (
        <div>
            <img src = {`${dogPhoto}`}/>
            <p>Here is the photo!</p>
        </div>
    )
}





