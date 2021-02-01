import { createInstance } from '../createCustomInstance';
import { dogsFromServer } from '../../helpers/applyAPIMapping';

export const BASE_URL = 'https://dog.ceo/api';

export const dogsListPath = '/breeds/list/all';


/* const API = createInstance(); */

export const getDogsData = async (path) => {
    
    try {

        const result = await fetch(`${BASE_URL}${path}`);
        const { message } = await result.json();
        const data = dogsFromServer(message)
        return data;

 
/*          API.get(`${BASE_URL}${path}`)
            .then((response) => ({
                data: dogsFromServer(response),
            })) */
            


    } catch (error) {
        throw error;
    }    
}
