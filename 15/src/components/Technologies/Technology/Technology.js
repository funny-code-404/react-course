import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Preloader from '../../Preloader/Preloader';
import { 
    ACTION_CLEAR_ADD_DATA,
    ACTION_GET_ADD_DATA_REQUESTED, 
    ACTION_GET_DATA_REQUESTED 
} from '../../../ducks/fetchDataReducer/actions';
import { technologiesUrl } from '../../../redux/urls';
import { 
    addDataSelector, 
    errorSelector, 
    fetchingSelector 
} from '../../../redux/selectors';


function Technology() {
    const dispatch = useDispatch();
    const { technologyId } = useParams();
    const isFetching = useSelector(fetchingSelector);
    const error = useSelector(errorSelector);
    const technologySelector = state => state.ageOfEmpires.fetchedData.technologies.filter(
        technology => technology.id === +technologyId
    );

    const [technology] = useSelector(technologySelector);
    const [developsIn, ...appliesTo] = useSelector(addDataSelector);



    useEffect(() => {
        if(!technology?.develops_in) {
            dispatch(ACTION_GET_DATA_REQUESTED(technologiesUrl));
        }

        if(technology?.develops_in) {
            dispatch(ACTION_GET_ADD_DATA_REQUESTED(technology?.develops_in));
        }
        
        return () => dispatch(ACTION_CLEAR_ADD_DATA);
    }, [dispatch, technology?.develops_in, technology?.applies_to]);



    useEffect(() => { 
            if(technology?.applies_to && 
                !developsIn?.created_in && 
                developsIn && technology?.applies_to[0].includes('https')) {
            technology?.applies_to.map(link => dispatch(ACTION_GET_ADD_DATA_REQUESTED(link)));
            }
            
    }, [dispatch, developsIn, technology?.applies_to]);

    let applies;

    if(technology?.applies_to){
        applies = (<ul>
        <p>Applies to:</p> 
        {technology?.applies_to[0].includes('https') ? 
        (appliesTo.map(obj => 
        <li key={obj.id}>

            {obj.unique_unit ? 
            (<Link to={`/civilizations/${obj.name}`}>
                {obj.name}
            </Link>) : (<Link to={`/units/${obj.name}-${obj.id}`}>
                {obj.name}
            </Link>)}

        </li>)) : (<li>{technology?.applies_to[0]}</li>)}
    </ul>)
    }

    return(
        <div>
            {(technology && developsIn && !isFetching) ? (<div>
            <h1>{technology.name}</h1>
            <ul>
                <li>Technology description: {technology.description}</li>
                <li>Expansion: {technology.expansion}</li>
                <li>Age: {technology.age}</li>
                <li>Cost: {Object.entries(technology.cost).map(([material, cost], i) => 
                <span key={i}>({cost} {material})</span>)
                }</li>
                <li>Build time: {technology.build_time}</li>
            </ul>
            <ul>
                <p>Develops in:</p> 
                {(developsIn.id) ? (<li key={developsIn.id}>
                    <Link to={`/structures/${developsIn.name}-${developsIn.id}`}>
                        {developsIn.age}&nbsp;age&nbsp;{developsIn.name.toLowerCase()}
                    </Link>
                </li>) : (Object.values(developsIn).map(structure => 
                <li key={structure.id}>
                    <Link to={`/structures/${structure.name}-${structure.id}`}>
                        {structure.age}&nbsp;age&nbsp;{structure.name.toLowerCase()}
                    </Link>
                </li>))}
            </ul>
            {applies}
           </div>) : error || <Preloader/>}
        </div>
    );
};

export default Technology;