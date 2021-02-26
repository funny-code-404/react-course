import { baseURL, createInstance } from "../createCustomInstance";
import { unitsFromServer } from "../../helpers/applyAPIMapping";

const API = createInstance();

export const getUnitsData = (path) => 
API.get(`${baseURL}${path}`)
.then((data) => ({
    data: unitsFromServer(data)
}))
.catch((e) => {
    throw e
})