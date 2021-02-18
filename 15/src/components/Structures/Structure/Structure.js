import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Preloader from '../../Preloader/Preloader';
import { ACTION_GET_DATA_REQUESTED } from '../../../ducks/fetchDataReducer/actions';
import { structuresUrl } from '../../../redux/urls';
import { errorSelector } from '../../../redux/selectors';


function Structure() {
    const dispatch = useDispatch();
    const { structureId } = useParams();
    const error = useSelector(errorSelector);
    const structureSelector = state => state.ageOfEmpires.fetchedData.structures.filter(
        structure => structure.id === +structureId);
        
    const [structure] = useSelector(structureSelector);

    useEffect(() => {
        if(!structure?.id) {
            dispatch(ACTION_GET_DATA_REQUESTED(structuresUrl));
        }
        
    }, [dispatch, structure?.id]);

    return(
        
        <div>
            {structure ? (<div>
            <h1>{structure.age}&nbsp;age&nbsp;{structure.name.toLowerCase()}</h1>
            <ul>
                <li>Expansion: {structure.expansion};</li>
                <li>Age: {structure.age};</li>
                <li>Cost: {Object.entries(structure.cost).map(([material, cost], i) => 
                    <span key={i}>{cost}&nbsp;{material};</span>)
                }</li>
                <li>Build time: {structure.build_time};</li>
                <li>Hit points: {structure.hit_points};</li>
                <li>Line of sight: {structure.line_of_sight};</li>
                <li>Armor: {structure.armor};</li>
                {structure.special && <ul>Special: 
                    {structure.special.map((spec, i) => <li key={i}>{spec};</li>)}
                </ul>}  
            </ul>
           </div>) : error || <Preloader/>}
        </div>
    );
};

export default Structure;