import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Preloader from '../../Preloader/Preloader';
import { 
    ACTION_CLEAR_ADD_DATA, 
    ACTION_GET_ADD_DATA_REQUESTED, 
    ACTION_GET_DATA_REQUESTED 
} from '../../../ducks/fetchDataReducer/actions';
import { unitsUrl } from '../../../redux/urls';
import { 
    addDataSelector, 
    errorSelector 
} from '../../../ducks/fetchDataReducer/selectors';


function Unit() {
    const dispatch = useDispatch();
    const { unitId } = useParams();
    const error = useSelector(errorSelector);
    const unitSelector = state => state.ageOfEmpires.fetchedData.units.filter(
        unit => unit.id === +unitId);
        
    const [unit] = useSelector(unitSelector);
    const [createdIn] = useSelector(addDataSelector);

    useEffect(() => {
        if(!unit?.id) {
            dispatch(ACTION_GET_DATA_REQUESTED(unitsUrl));
        }
        
        if(unit?.id) {
            dispatch(ACTION_GET_ADD_DATA_REQUESTED(unit?.created_in));
        }

        return () => dispatch(ACTION_CLEAR_ADD_DATA);
    }, [dispatch, unit?.id, unit?.created_in]);

    return(
        
        <div>
            {(unit && createdIn) ? (<div>
            <h1>{unit.name}</h1>
            <ul>
                <li>{unit.description}</li>
                <li>Expansion: {unit.expansion}</li>
                <li>Age: {unit.age}</li>
                <li>Cost: {Object.entries(unit.cost).map(([material, cost], i) => 
                <span key={i}>({cost} {material})</span>)
                }</li>
                <li>Build time: {unit.build_time}</li>
                <li>Reload time: {unit.reload_time}</li>
                <li>Attack delay: {unit.attack_delay}</li>
                <li>Movement rate: {unit.movement_rate}</li>
                <li>Line of sight: {unit.line_of_sight}</li>
                <li>Hit points: {unit.hit_points}</li>
                <li>Range: {unit.range}</li>
                <li>Attack: {unit.attack}</li>
                <li>Armor: {unit.armor}</li>
                {unit.attack_bonus && <li>Attack bonus: {unit.attack_bonus}</li>}
                {unit.accuracy && <li>Accuracy: {unit.accuracy}</li>}
            </ul>
                <p>Can be created in:</p> 
            <ul>
                {(createdIn.id) ? (<li key={createdIn.id}>
                    <Link to={`/structures/${createdIn.name}-${createdIn.id}`}>
                        {createdIn.age}&nbsp;age&nbsp;{createdIn.name.toLowerCase()}
                    </Link>
                </li>) : (Object.values(createdIn).map(structure => 
                <li key={structure.id}>
                    <Link to={`/structures/${structure.name}-${structure.id}`}>
                        {structure.age}&nbsp;age&nbsp;{structure.name.toLowerCase()}
                    </Link>
                </li>))}
            </ul>
           </div>) : (error && <h2>{error}</h2>) || <Preloader/>}
        </div>
    );
};

export default Unit;