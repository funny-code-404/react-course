import { baseURL, createInstance } from "../createCustomInstance";
import { createdInFromServer } from "../../helpers/applyAPIMapping";

const API = createInstance();

export const getCreatedInData = (path) => 
API.get(`${baseURL}${path}`)
.then((data) => ({
	data: createdInFromServer(data)
}))
.catch((e) => { throw e })