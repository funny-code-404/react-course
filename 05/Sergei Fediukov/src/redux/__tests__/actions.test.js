
import { getData, getDetails, getUniqueUnitDetails, getUniqueTechDetails, getUniqueCreatedInDetails } from '../actions'

describe('*** ACTIONS ***', () => {
    describe('GET_DATA ACTION', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedPath = 'Test path'
                        const mockedAction = {
                            type: 'GET_DATA',
                            path: mockedPath,
                        }
                        expect(getData(mockedPath)).toEqual(mockedAction)
                    })
                })
            })
        })
    })
    describe('GET_DETAILS ACTION', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedPath = 'Test path'
                        const mockedAction = {
                            type: 'GET_DETAILS',
                            path: mockedPath,
                        }
                        expect(getDetails(mockedPath)).toEqual(mockedAction)
                    })
                })
            })
        })
    })
    describe('GET_UNIQUE_UNIT_DETAILS ACTION', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedPath = 'Test path'
                        const mockedAction = {
                            type: 'GET_UNIQUE_UNIT_DETAILS',
                            path: mockedPath,
                        }
                        expect(getUniqueUnitDetails(mockedPath)).toEqual(mockedAction)
                    })
                })
            })
        })
    })
    describe('GET_UNIQUE_TECH_DETAILS ACTION', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedPath = 'Test path'
                        const mockedAction = {
                            type: 'GET_UNIQUE_TECH_DETAILS',
                            path: mockedPath,
                        }
                        expect(getUniqueTechDetails(mockedPath)).toEqual(mockedAction)
                    })
                })
            })
        })
    })
    describe('GET_UNIQUE_CREATED_IN_DETAILS ACTION', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedPath = 'Test path'
                        const mockedAction = {
                            type: 'GET_UNIQUE_CREATED_IN_DETAILS',
                            path: mockedPath,
                        }
                        expect(getUniqueCreatedInDetails(mockedPath)).toEqual(mockedAction)
                    })
                })
            })
        })
    })
})