import fetchMock from "jest-fetch-mock";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { rootReducer } from '../../redux/rootReducer';
import {
    ACTION_GET_CIVILIZATIONS_DATA_REQUESTED,
    ACTION_GET_CIVILIZATIONS_DATA_SUCCEEDED,
    ACTION_GET_UNITS_DATA_REQUESTED,
    ACTION_GET_STRUCTURES_DATA_REQUESTED,
    ACTION_GET_TECHNOLOGIES_DATA_REQUESTED,
    ACTION_GET_ITEM_DETAILS_REQUESTED,
    ACTION_GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED,
    ACTION_GET_UNIQUE_TECH_DETAILS_REQUESTED,
    ACTION_GET_UNIQUE_UNIT_DETAILS_REQUESTED


} from '../../redux/actions';

import { middlewares } from '../../redux/index';


// describe('Redux store integration tests', () => {


fetchMock.enableMocks();
// import { getData, getDetails } from "..";

describe('"', () => {
    let store;
    beforeEach(() => {
        store = createStore(
            combineReducers({ ...rootReducer }),
            {},
            applyMiddleware(...middlewares)
        );
        fetch.resetMocks();
    });
    const ACTION = () => ({
        type: 'ACTION',
        path: '/test',
        payload: 'data'
    })
    // const action = {

    it("store test", async () => {
        // fetch.mockResponseOnce(JSON.stringify())
        const res = await store.dispatch(ACTION());
        expect(store.getState()).toBeTruthy();
        expect(res).toEqual({ "path": "/test", "type": "ACTION", "payload": "data" })
        // const res2 = await store.dispatch(ACTION_GET_UNITS_DATA_REQUESTED(action.path));

    })
    it("finds exchange", async () => {
        const res = await store.dispatch(ACTION_GET_CIVILIZATIONS_DATA_REQUESTED('/civilizations'));
        expect(res).toEqual({ "path": "/civilizations", "type": "GET_CIVILIZATIONS_DATA_REQUESTED" });
        expect(store.getState().civilizations).toBeTruthy();
    });
    it("finds exchange", async () => {
        const res = await store.dispatch(ACTION_GET_UNITS_DATA_REQUESTED('/units'));
        expect(res).toEqual({ "path": "/units", "type": "GET_UNITS_DATA_REQUESTED" });
    });
    it("finds exchange", async () => {
        const res = await store.dispatch(ACTION_GET_STRUCTURES_DATA_REQUESTED('/structures'));
        expect(res).toEqual({ "path": "/structures", "type": "GET_STRUCTURES_DATA_REQUESTED" });
    });
    it("finds exchange", async () => {
        const res = await store.dispatch(ACTION_GET_TECHNOLOGIES_DATA_REQUESTED('/technologies'));
        expect(res).toEqual({ "path": "/technologies", "type": "GET_TECHNOLOGIES_DATA_REQUESTED" });
    });
    it("finds exchange", async () => {
        const res = await store.dispatch(ACTION_GET_ITEM_DETAILS_REQUESTED('/items'));
        expect(res).toEqual({ "path": "/items", "type": "GET_ITEM_DETAILS_REQUESTED" });
    });
    it("finds exchange", async () => {
        const res = await store.dispatch(ACTION_GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED('/uniqueCreatedIn'));
        expect(res).toEqual({ "path": "/uniqueCreatedIn", "type": "GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED" });
    });
    it("finds exchange", async () => {
        const res = await store.dispatch(ACTION_GET_UNIQUE_TECH_DETAILS_REQUESTED('/uniqueTech'));
        expect(res).toEqual({ "path": "/uniqueTech", "type": "GET_UNIQUE_TECH_DETAILS_REQUESTED" });
    });
    it("finds exchange", async () => {
        const res = await store.dispatch(ACTION_GET_UNIQUE_UNIT_DETAILS_REQUESTED('/uniqueUnit'));
        expect(res).toEqual({ "path": "/uniqueUnit", "type": "GET_UNIQUE_UNIT_DETAILS_REQUESTED" });
    });
})