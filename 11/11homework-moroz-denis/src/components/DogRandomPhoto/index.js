import { BASE_URL } from '../../services/api/dogs'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_GET_DOG_PHOTO_REQUEST } from '../../ducks/dogs/actions';
import { dogPhotoSelector } from '../../ducks/dogs/selectors';

export const DogRandomPhoto = (props) => {

    const { breed } = props;

    const path = '/breed/' + `${breed}` + '/images/random';

    const dispach = useDispatch();
    const { data: dogPhoto } = useSelector(dogPhotoSelector);

    useEffect(() => {
        dispach(ACTION_GET_DOG_PHOTO_REQUEST(path))
    }, []);

    return (
        <>
          {
            Boolean(dogPhoto) &&
              <div>
                  <img src = {`${dogPhoto}`}/>
                  <p>Here is the photo!</p>
              </div>
            }
        </>  
    );
};





