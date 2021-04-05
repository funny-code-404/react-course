import { combineReducers } from "redux";
import {
  resources,
  civilizations,
  units,
  structures,
  technologies,
} from "../ducks/reducers";

export default combineReducers({
  resources,
  civilizations,
  units,
  structures,
  technologies,
});
