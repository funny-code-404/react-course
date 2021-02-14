import { civilizations } from "../ducks/civilizations/reducer";
import { structures } from "../ducks/structures/reducer";
import { units } from "../ducks/units/reducer";
import { technologies } from "../ducks/technologies/reducer";
import { item } from "../ducks/item/reducer";
import { createdIn } from "../ducks/createdIn/reducer";
import { uniqueTech } from "../ducks/uniqueTech/reducer";
import { uniqueUnit } from "../ducks/uniqueUnit/reducer";
import { auth } from "../ducks/auth/reducer";

const rootReducer = {
	civilizations,
	units,
	structures,
	technologies,
	item,
	createdIn,
	uniqueTech,
	uniqueUnit,
	auth,
}

export default rootReducer;