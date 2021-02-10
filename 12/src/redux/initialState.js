import { initialStateCivilizations } from "../ducks/civilizations/reducer";
import { initialStructures } from "../ducks/structures/reducer";
import { initialStateUnits } from "../ducks/units/reducer";
import { initialTechnologies } from "../ducks/technologies/reducer";
import { initialStateItem } from "../ducks/item/reducer";
import { initialCreatedIn } from "../ducks/createdIn/reducer";
import { initialUniqueTech } from "../ducks/uniqueTech/reducer";
import { initialUniqueUnit } from "../ducks/uniqueUnit/reducer";
import { initialOnAuth } from "../ducks/auth/reducer";


const initialState = {
	...initialStateCivilizations,
	...initialStateUnits,
	...initialStructures,
	...initialTechnologies,
	...initialStateItem,
	...initialCreatedIn,
	...initialUniqueTech,
	...initialUniqueUnit,
	...initialOnAuth,
};

export default initialState;