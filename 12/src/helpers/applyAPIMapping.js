export const civilizationsFromServer = ({data}) => data.civilizations;
export const unitsFromServer = ({data}) => data.units;
export const structuresFromServer = ({data}) => data.structures;
export const technologiesFromServer = ({data}) => data.technologies;
export const itemFromServer = ({data}) => data;

export const createdInFromServer = ({data}) => { 
	if(data.length){
		return data[0]
	} else {
		return data
	}
};
export const uniqueTechFromServer = ({data}) => data;
export const uniqueUnitFromServer = ({data}) => data;