import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_GET_DOGS_DATA_REQUEST } from '../../ducks/dogs/actions';
import { DataList } from '../DataList'
import { dogsSelector } from '../../ducks/dogs/selectors';

export const DataBlock = (props) => {

    const { path } = props;

    const dispach = useDispatch();
    const { data } = useSelector(dogsSelector);

    useEffect(() => {

        if(!data) {
            dispach(ACTION_GET_DOGS_DATA_REQUEST(path));
        } else {
            return data;
        }  
    }, []);

    return(
        <>
            {Boolean(data) && <DataList data = {data}/>}
        </>
    );
};