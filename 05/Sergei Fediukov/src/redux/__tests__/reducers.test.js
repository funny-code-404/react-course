import { civilizationsReducer } from "../../ducks/civilizations";
import { unitsReducer } from "../../ducks/units";
import { structuresReducer } from "../../ducks/structures";
import { technologiesReducer } from "../../ducks/technologies";
import { itemReducer } from "../../ducks/item";
import { uniqueUnitReducer } from "../../ducks/uniqueUnit";
import { uniqueTechReducer } from "../../ducks/uniqueTech";
import { uniqueCreatedInReducer } from "../../ducks/uniqueCreatedIn";


describe('*** civilizations reducer ***', () => {
    describe('initial', () => {
        it('should return correct value', () => {
            expect(civilizationsReducer({}, {})).toEqual({});
        });
    });

    describe('GET_CIVILIZATIONS_DATA_REQUESTED action', () => {
        it('should return correct value', () => {
            const MOCKED_ACTION = {
                type: "GET_CIVILIZATIONS_DATA_REQUESTED",
            };
            const MOCKED_RESULT = {
                isFetching: true,
                error: null
            };
            expect(civilizationsReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
    describe('GET_CIVILIZATIONS_DATA_FAILED action', () => {
        it('should return correct value', () => {
            const mockedPayload = 'error text'
            const MOCKED_ACTION = {
                type: "GET_CIVILIZATIONS_DATA_FAILED",
                payload: mockedPayload
            };
            const MOCKED_RESULT = {
                isFetching: false,
                error: mockedPayload
            };
            expect(civilizationsReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
    describe('GET_CIVILIZATIONS_DATA_SUCCEEDED action', () => {
        it('should return correct value', () => {
            const mockedPayload = []
            const MOCKED_ACTION = {
                type: "GET_CIVILIZATIONS_DATA_SUCCEEDED",
                payload: mockedPayload
            };
            const MOCKED_RESULT = {
                isFetching: false,
                data: mockedPayload
            };
            expect(civilizationsReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
});
describe('*** "units" reducer ***', () => {
    describe('initial', () => {
        it('should return correct value', () => {
            expect(unitsReducer({}, {})).toEqual({});
        });
    });

    describe('GET_UNITS_DATA_REQUESTED action', () => {
        it('should return correct value', () => {
            const MOCKED_ACTION = {
                type: "GET_UNITS_DATA_REQUESTED",
            };
            const MOCKED_RESULT = {
                isFetching: true,
                error: null
            };
            expect(unitsReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
    describe('GET_UNITS_DATA_FAILED action', () => {
        it('should return correct value', () => {
            const mockedPayload = 'error text'
            const MOCKED_ACTION = {
                type: "GET_UNITS_DATA_FAILED",
                payload: mockedPayload
            };
            const MOCKED_RESULT = {
                isFetching: false,
                error: mockedPayload
            };
            expect(unitsReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
    describe('GET_UNITS_DATA_SUCCEEDED action', () => {
        it('should return correct value', () => {
            const mockedPayload = []
            const MOCKED_ACTION = {
                type: "GET_UNITS_DATA_SUCCEEDED",
                payload: mockedPayload
            };
            const MOCKED_RESULT = {
                isFetching: false,
                data: mockedPayload
            };
            expect(unitsReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
});
describe('*** "structures" reducer ***', () => {
    describe('initial', () => {
        it('should return correct value', () => {
            expect(structuresReducer({}, {})).toEqual({});
        });
    });

    describe('GET_STRUCTURES_DATA_REQUESTED action', () => {
        it('should return correct value', () => {
            const MOCKED_ACTION = {
                type: "GET_STRUCTURES_DATA_REQUESTED",
            };
            const MOCKED_RESULT = {
                isFetching: true,
                error: null
            };
            expect(structuresReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT)
        });
    });
    describe('GET_STRUCTURES_DATA_FAILED action', () => {
        it('should return correct value', () => {
            const mockedPayload = 'error text'
            const MOCKED_ACTION = {
                type: "GET_STRUCTURES_DATA_FAILED",
                payload: mockedPayload
            };
            const MOCKED_RESULT = {
                isFetching: false,
                error: mockedPayload
            };
            expect(structuresReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
    describe('GET_STRUCTURES_DATA_SUCCEEDED action', () => {
        it('should return correct value', () => {
            const mockedPayload = []
            const MOCKED_ACTION = {
                type: "GET_STRUCTURES_DATA_SUCCEEDED",
                payload: mockedPayload
            };
            const MOCKED_RESULT = {
                isFetching: false,
                data: mockedPayload
            };
            expect(structuresReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT)
        });
    });
});
describe('*** "technologies" reducer ***', () => {
    describe('initial', () => {
        it('should return correct value', () => {
            expect(technologiesReducer({}, {})).toEqual({});
        });
    });

    describe('GET_TECHNOLOGIES_DATA_REQUESTED action', () => {
        it('should return correct value', () => {
            const MOCKED_ACTION = {
                type: "GET_TECHNOLOGIES_DATA_REQUESTED",
            };
            const MOCKED_RESULT = {
                isFetching: true,
                error: null
            };
            expect(technologiesReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
    describe('GET_TECHNOLOGIES_DATA_FAILED action', () => {
        it('should return correct value', () => {
            const mockedPayload = 'error text'
            const MOCKED_ACTION = {
                type: "GET_TECHNOLOGIES_DATA_FAILED",
                payload: mockedPayload
            };
            const MOCKED_RESULT = {
                isFetching: false,
                error: mockedPayload
            };
            expect(technologiesReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
    describe('GET_TECHNOLOGIES_DATA_SUCCEEDED action', () => {
        it('should return correct value', () => {
            const mockedPayload = []
            const MOCKED_ACTION = {
                type: "GET_TECHNOLOGIES_DATA_SUCCEEDED",
                payload: mockedPayload
            };
            const MOCKED_RESULT = {
                isFetching: false,
                data: mockedPayload
            };
            expect(technologiesReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
});
describe('*** "item" reducer ***', () => {
    describe('initial', () => {
        it('should return correct value', () => {
            expect(itemReducer({}, {})).toEqual({});
        });
    });

    describe('GET_ITEM_DETAILS_REQUESTED action', () => {
        it('should return correct value', () => {
            const MOCKED_ACTION = {
                type: "GET_ITEM_DETAILS_REQUESTED",
            };
            const MOCKED_RESULT = {
                isFetching: true,
                error: null
            };
            expect(itemReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
    describe('GET_ITEM_DETAILS_FAILED action', () => {
        it('should return correct value', () => {
            const mockedPayload = 'error text'
            const MOCKED_ACTION = {
                type: "GET_ITEM_DETAILS_FAILED",
                payload: mockedPayload
            };
            const MOCKED_RESULT = {
                isFetching: false,
                error: mockedPayload
            };
            expect(itemReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
    describe('GET_ITEM_DETAILS_SUCCEEDED action', () => {
        it('should return correct value', () => {
            const mockedPayload = []
            const MOCKED_ACTION = {
                type: "GET_ITEM_DETAILS_SUCCEEDED",
                payload: mockedPayload
            };
            const MOCKED_RESULT = {
                isFetching: false,
                data: mockedPayload
            };
            expect(itemReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
});
describe('*** "unique unit" details reducer ***', () => {
    describe('initial', () => {
        it('should return correct value', () => {
            expect(uniqueUnitReducer({}, {})).toEqual({});
        });
    });
    describe('GET_UNIQUE_UNIT_DETAILS_REQUESTED action', () => {
        it('should return correct value', () => {
            const MOCKED_ACTION = {
                type: "GET_UNIQUE_UNIT_DETAILS_REQUESTED",
            };
            const MOCKED_RESULT = {
                isFetching: true,
                error: null
            };
            expect(uniqueUnitReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
    describe('GET_UNIQUE_UNIT_DETAILS_FAILED action', () => {
        it('should return correct value', () => {
            const mockedPayload = 'error text'
            const MOCKED_ACTION = {
                type: "GET_UNIQUE_UNIT_DETAILS_FAILED",
                payload: mockedPayload
            };
            const MOCKED_RESULT = {
                isFetching: false,
                error: mockedPayload
            };
            expect(uniqueUnitReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
    describe('GET_UNIQUE_UNIT_DETAILS_SUCCEEDED action', () => {
        it('should return correct value', () => {
            const mockedPayload = []
            const MOCKED_ACTION = {
                type: "GET_UNIQUE_UNIT_DETAILS_SUCCEEDED",
                payload: mockedPayload
            };
            const MOCKED_RESULT = {
                isFetching: false,
                data: mockedPayload
            };
            expect(uniqueUnitReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
});
describe('*** "unique tech" details reducer ***', () => {
    describe('initial', () => {
        it('should return correct value', () => {
            expect(uniqueTechReducer({}, {})).toEqual({});
        });
    });
    describe('GET_UNIQUE_TECH_DETAILS_REQUESTED action', () => {
        it('should return correct value', () => {
            const MOCKED_ACTION = {
                type: "GET_UNIQUE_TECH_DETAILS_REQUESTED",
            };
            const MOCKED_RESULT = {
                isFetching: true,
                error: null
            };
            expect(uniqueTechReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
    describe('GET_UNIQUE_TECH_DETAILS_FAILED action', () => {
        it('should return correct value', () => {
            const mockedPayload = 'error text'
            const MOCKED_ACTION = {
                type: "GET_UNIQUE_TECH_DETAILS_FAILED",
                payload: mockedPayload
            };
            const MOCKED_RESULT = {
                isFetching: false,
                error: mockedPayload
            };
            expect(uniqueTechReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
    describe('GET_UNIQUE_TECH_DETAILS_SUCCEEDED action', () => {
        it('should return correct value', () => {
            const mockedPayload = []
            const MOCKED_ACTION = {
                type: "GET_UNIQUE_TECH_DETAILS_SUCCEEDED",
                payload: mockedPayload
            };
            const MOCKED_RESULT = {
                isFetching: false,
                data: mockedPayload
            };
            expect(uniqueTechReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
});
describe('*** "unique created in" details reducer ***', () => {
    describe('initial', () => {
        it('should return correct value', () => {
            expect(uniqueCreatedInReducer({}, {})).toEqual({});
        });
    });
    describe('GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED action', () => {
        it('should return correct value', () => {
            const MOCKED_ACTION = {
                type: "GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED",
            };
            const MOCKED_RESULT = {
                isFetching: true,
                error: null
            };
            expect(uniqueCreatedInReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
    describe('GET_UNIQUE_CREATED_IN_DETAILS_FAILED action', () => {
        it('should return correct value', () => {
            const mockedPayload = 'error text'
            const MOCKED_ACTION = {
                type: "GET_UNIQUE_CREATED_IN_DETAILS_FAILED",
                payload: mockedPayload
            };
            const MOCKED_RESULT = {
                isFetching: false,
                error: mockedPayload
            };
            expect(uniqueCreatedInReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
    describe('GET_UNIQUE_CREATED_IN_DETAILS_SUCCEEDED action', () => {
        it('should return correct value', () => {
            const mockedPayload = []
            const MOCKED_ACTION = {
                type: "GET_UNIQUE_CREATED_IN_DETAILS_SUCCEEDED",
                payload: mockedPayload
            };
            const MOCKED_RESULT = {
                isFetching: false,
                data: mockedPayload
            };
            expect(uniqueCreatedInReducer({}, MOCKED_ACTION)).toEqual(MOCKED_RESULT);
        });
    });
});
