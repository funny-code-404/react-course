import {
    GET_CIVILIZATIONS_DATA_REQUESTED,
    GET_CIVILIZATIONS_DATA_SUCCEEDED,
    GET_CIVILIZATIONS_DATA_FAILED
} from '../ducks/civilizations'
import {
    GET_UNITS_DATA_REQUESTED,
    GET_UNITS_DATA_SUCCEEDED,
    GET_UNITS_DATA_FAILED
} from '../ducks/units'
import {
    GET_STRUCTURES_DATA_REQUESTED,
    GET_STRUCTURES_DATA_SUCCEEDED,
    GET_STRUCTURES_DATA_FAILED
} from '../ducks/structures'
import {
    GET_TECHNOLOGIES_DATA_REQUESTED,
    GET_TECHNOLOGIES_DATA_SUCCEEDED,
    GET_TECHNOLOGIES_DATA_FAILED
} from '../ducks/technologies'
import {
    GET_ITEM_DETAILS_REQUESTED,
    GET_ITEM_DETAILS_SUCCEEDED,
    GET_ITEM_DETAILS_FAILED
} from '../ducks/item'
import {
    GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED,
    GET_UNIQUE_CREATED_IN_DETAILS_SUCCEEDED,
    GET_UNIQUE_CREATED_IN_DETAILS_FAILED
} from '../ducks/uniqueCreatedIn'
import {
    GET_UNIQUE_TECH_DETAILS_REQUESTED,
    GET_UNIQUE_TECH_DETAILS_SUCCEEDED,
    GET_UNIQUE_TECH_DETAILS_FAILED
} from '../ducks/uniqueTech'
import {
    GET_UNIQUE_UNIT_DETAILS_REQUESTED,
    GET_UNIQUE_UNIT_DETAILS_SUCCEEDED,
    GET_UNIQUE_UNIT_DETAILS_FAILED
} from '../ducks/uniqueUnit'

export const ACTION_GET_CIVILIZATIONS_DATA_REQUESTED = (path) => ({
    type: GET_CIVILIZATIONS_DATA_REQUESTED,
    path
})
export const ACTION_GET_CIVILIZATIONS_DATA_SUCCEEDED = (data) => ({
    type: GET_CIVILIZATIONS_DATA_SUCCEEDED,
    payload: data,
})
export const ACTION_GET_CIVILIZATIONS_DATA_FAILED = (e) => ({
    type: GET_CIVILIZATIONS_DATA_FAILED,
    payload: e.toString()
})

export const ACTION_GET_UNITS_DATA_REQUESTED = (path) => ({
    type: GET_UNITS_DATA_REQUESTED,
    path
})
export const ACTION_GET_UNITS_DATA_SUCCEEDED = (data) => ({
    type: GET_UNITS_DATA_SUCCEEDED,
    payload: data,
})
export const ACTION_GET_UNITS_DATA_FAILED = (e) => ({
    type: GET_UNITS_DATA_FAILED,
    payload: e.toString()
})

export const ACTION_GET_STRUCTURES_DATA_REQUESTED = (path) => ({
    type: GET_STRUCTURES_DATA_REQUESTED,
    path
})
export const ACTION_GET_STRUCTURES_DATA_SUCCEEDED = (data) => ({
    type: GET_STRUCTURES_DATA_SUCCEEDED,
    payload: data,
})
export const ACTION_GET_STRUCTURES_DATA_FAILED = (e) => ({
    type: GET_STRUCTURES_DATA_FAILED,
    payload: e.toString()
})

export const ACTION_GET_TECHNOLOGIES_DATA_REQUESTED = (path) => ({
    type: GET_TECHNOLOGIES_DATA_REQUESTED,
    path
})
export const ACTION_GET_TECHNOLOGIES_DATA_SUCCEEDED = (data) => ({
    type: GET_TECHNOLOGIES_DATA_SUCCEEDED,
    payload: data,
})
export const ACTION_GET_TECHNOLOGIES_DATA_FAILED = (e) => ({
    type: GET_TECHNOLOGIES_DATA_FAILED,
    payload: e.toString()
})

export const ACTION_GET_ITEM_DETAILS_REQUESTED = (path) => ({
    type: GET_ITEM_DETAILS_REQUESTED,
    path
})
export const ACTION_GET_ITEM_DETAILS_SUCCEEDED = (data) => ({
    type: GET_ITEM_DETAILS_SUCCEEDED,
    payload: data,
})
export const ACTION_GET_ITEM_DETAILS_FAILED = (e) => ({
    type: GET_ITEM_DETAILS_FAILED,
    payload: e.toString()
})

export const ACTION_GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED = (path) => ({
    type: GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED,
    path
})
export const ACTION_GET_UNIQUE_CREATED_IN_DETAILS_SUCCEEDED = (data) => ({
    type: GET_UNIQUE_CREATED_IN_DETAILS_SUCCEEDED,
    payload: data,
})
export const ACTION_GET_UNIQUE_CREATED_IN_DETAILS_FAILED = (e) => ({
    type: GET_UNIQUE_CREATED_IN_DETAILS_FAILED,
    payload: e.toString()
})

export const ACTION_GET_UNIQUE_TECH_DETAILS_REQUESTED = (path) => ({
    type: GET_UNIQUE_TECH_DETAILS_REQUESTED,
    path
})
export const ACTION_GET_UNIQUE_TECH_DETAILS_SUCCEEDED = (data) => ({
    type: GET_UNIQUE_TECH_DETAILS_SUCCEEDED,
    payload: data,
})
export const ACTION_GET_UNIQUE_TECH_DETAILS_FAILED = (e) => ({
    type: GET_UNIQUE_TECH_DETAILS_FAILED,
    payload: e.toString()
})
export const ACTION_GET_UNIQUE_UNIT_DETAILS_REQUESTED = (path) => ({
    type: GET_UNIQUE_UNIT_DETAILS_REQUESTED,
    path
})
export const ACTION_GET_UNIQUE_UNIT_DETAILS_SUCCEEDED = (data) => ({
    type: GET_UNIQUE_UNIT_DETAILS_SUCCEEDED,
    payload: data,
})
export const ACTION_GET_UNIQUE_UNIT_DETAILS_FAILED = (e) => ({
    type: GET_UNIQUE_UNIT_DETAILS_FAILED,
    payload: e.toString()
})