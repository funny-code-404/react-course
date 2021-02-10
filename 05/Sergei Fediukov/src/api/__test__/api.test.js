import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();
import { getData, getDetails } from "..";

describe('getData should fetch correctly"', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });
    const action = {
        path: '/civilizations'
    }
    it("finds exchange", async () => {
        fetch.mockResponseOnce(JSON.stringify({ civilizations: '12345' }))
        const res = await getData(action);
        expect(res).toEqual('12345')
        expect(fetch).toHaveBeenCalledTimes(1);
    });
})
describe('getData should fetch correctly"', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });
    const action = {
        path: '/civilizations'
    }
    it("finds exchange", async () => {
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
        const res = await getDetails(action);
        expect(res).toEqual({ data: '12345' })
        expect(fetch).toHaveBeenCalledTimes(1);
    });
})