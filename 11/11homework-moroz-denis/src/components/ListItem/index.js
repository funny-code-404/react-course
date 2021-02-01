import { Link } from 'react-router-dom';

export const ListItem = ({ listItem }) => {

    const dogBreed = listItem[0];
    const dogBreedTypes = listItem[1]

    return(
        <li>
            <Link to = {`/dog/${dogBreed}`}><span>{dogBreed}</span></Link>

            {Boolean(dogBreedTypes.length) && <span>: {dogBreedTypes.join(', ')}</span>}
        </li>
    );
};