import { baseURL, createInstance } from "../createCustomInstance";
import { uniqueTechFromServer } from "../../helpers/applyAPIMapping";

const API = createInstance();

export const getUniqueTechData = (path) =>
API(`${baseURL}${path}`)
.then((data) => ({
	data: uniqueTechFromServer(data)
}))
.catch((e) => {
	throw e
})