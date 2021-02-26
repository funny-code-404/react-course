import { baseURL, createInstance } from "../createCustomInstance";
import { civilizationsFromServer } from "../../helpers/applyAPIMapping";

const API = createInstance();

export const getCivilizationsData = (path) => 
API.get(`${baseURL}${path}`)
.then((data) => ({
	data: civilizationsFromServer(data)
}))
.catch((e) => { throw e })