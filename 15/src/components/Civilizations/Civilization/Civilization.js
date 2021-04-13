import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Preloader from '../../Preloader/Preloader';
import { 
    ACTION_CLEAR_ADD_DATA, 
    ACTION_GET_ADD_DATA_REQUESTED, 
    ACTION_GET_DATA_REQUESTED 
} from '../../../ducks/fetchDataReducer/actions';
import { civilizationsUrl } from '../../../redux/urls';
import { 
    addDataSelector, 
    errorSelector, 
    fetchingSelector 
} from '../../../ducks/fetchDataReducer/selectors';

function Civilization() {
    const dispatch = useDispatch();
    const { civilizationType } = useParams();
    const isFetching = useSelector(fetchingSelector);
    const error = useSelector(errorSelector);
    const civilizationSelector = state => state.ageOfEmpires.fetchedData.civilizations.filter(
        civilization => civilization.name === civilizationType);

    const [civilization] = useSelector(civilizationSelector);
    const [uniqueUnit, uniqueTech] = useSelector(addDataSelector);
    
    useEffect(() => {
        if(!civilization?.id) {
            dispatch(ACTION_GET_DATA_REQUESTED(civilizationsUrl));
        }
        
        if(civilization?.unique_unit[0]?.includes('https')) {
            dispatch(ACTION_GET_ADD_DATA_REQUESTED(civilization?.unique_unit));
        }
        
        return () => dispatch(ACTION_CLEAR_ADD_DATA);
    }, [dispatch, civilization?.id, civilization?.unique_unit]);

    useEffect(() => {
        if(uniqueUnit){
            dispatch(ACTION_GET_ADD_DATA_REQUESTED(civilization?.unique_tech));   
        }
 
    }, [dispatch, uniqueUnit, civilization?.unique_tech ]);  

    return(
        
        <div>
            {(civilization && !isFetching) ? (<div>
                <h1>{civilization.name}</h1>         
            <ul>
                <li>Expansion: {civilization.expansion};</li>
                <li>Type of army: {civilization.army_type};</li>
                {uniqueUnit?.name && 
                <li>Unique unit: 
                    <Link 
                    to={`/units/${uniqueUnit.name}-${uniqueUnit.id}`}>
                        {uniqueUnit.name}
                    </Link>;
                </li>}
                {uniqueTech?.name && 
                <li>Unique technology: 
                    <Link 
                    to={`/technologies/${uniqueTech.name}-${uniqueTech.id}`}>
                        {uniqueTech.name}
                    </Link>;
                </li>}
                <li>Team bonus: {civilization.team_bonus};</li>
            </ul>
            <ul>
                Civilization bonuses:
                {civilization.civilization_bonus?.map((bonus, id) => <li key={id}>{bonus};</li>)}
            </ul>
           </div>) : (error && <h2>{error}</h2>) || <Preloader/>}
        </div>
    );
};

export default Civilization;