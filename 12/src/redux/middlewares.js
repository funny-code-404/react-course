import { GET_DATA, GET_DETAIL, GET_CREATEDIN, GET_UNIQUETECH, GET_UNIQUEUNIT } from "./action";
import { paths } from "../config";
import { getDataCivilizationsRequested } from "../ducks/civilizations/actions";
import { getDataStructuresRequsted } from "../ducks/structures/actions";
import { getDataUnitsRequested } from "../ducks/units/actions";
import { getDataTechnologiesRequsted } from "../ducks/technologies/actions";
import { getDataItemRequested } from "../ducks/item/actions";
import { getDataCreatedInRequsted } from "../ducks/createdIn/actions";
import { getDataUniqueTechRequsted } from "../ducks/uniqueTech/actions";
import { getDataUniqueUnitRequsted } from "../ducks/uniqueUnit/actions";

export const getDataMiddlewares = store => next => action => {
	if(action.type === GET_DATA) {
		switch (action.path) {
			case paths.civilizations: return store.dispatch(getDataCivilizationsRequested(action.path))
			case paths.units: return store.dispatch(getDataUnitsRequested(action.path))
			case paths.structures: return store.dispatch(getDataStructuresRequsted(action.path))
			case paths.technologies: return store.dispatch(getDataTechnologiesRequsted(action.path))
		}
	}
	if(action.type === GET_DETAIL) {
		return store.dispatch(getDataItemRequested(action.path))
	}
	if(action.type === GET_CREATEDIN) {
		return store.dispatch(getDataCreatedInRequsted(action.path))
	}
	if(action.type === GET_UNIQUETECH) {
		return store.dispatch(getDataUniqueTechRequsted(action.path))
	}
	if(action.type === GET_UNIQUEUNIT) {
		return store.dispatch(getDataUniqueUnitRequsted(action.path))
	}
	next(action)
}