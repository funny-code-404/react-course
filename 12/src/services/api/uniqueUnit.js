import { baseURL, createInstance } from "../createCustomInstance";
import { uniqueUnitFromServer } from "../../helpers/applyAPIMapping";

const API = createInstance();

export const getUniqueUnitData = (path) =>
API(`${baseURL}${path}`)
.then((data) => ({
	data: uniqueUnitFromServer(data)
}))
.catch((e) => {
	throw e
})