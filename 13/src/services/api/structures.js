import { baseURL, createInstance } from "../createCustomInstance";
import { structuresFromServer } from "../../helpers/applyAPIMapping";

const API = createInstance();

export const getStructuresData = (path) =>
API.get(`${baseURL}${path}`)
.then((data) => ({
    data: structuresFromServer(data)
}))
.catch((e) => {
    throw e
})