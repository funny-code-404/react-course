import { baseURL, createInstance } from "../createCustomInstance";
import { technologiesFromServer } from "../../helpers/applyAPIMapping";

const API = createInstance();

export const getTechnologiesData = (path) =>
API(`${baseURL}${path}`)
.then((data) => ({
	data: technologiesFromServer(data)
}))
.catch((e) => {
	throw e
})