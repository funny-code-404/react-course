import { baseURL, createInstance } from "../createCustomInstance";
import { itemFromServer } from "../../helpers/applyAPIMapping";

const API = createInstance();

export const getItemData = (path) => 
API.get(`${baseURL}${path}`) 
.then((data) => ({
	data: itemFromServer(data)
}))
.catch((e) => { throw e })