
import {
    ACTION_GET_CIVILIZATIONS_DATA_REQUESTED,
    ACTION_GET_CIVILIZATIONS_DATA_SUCCEEDED,
    ACTION_GET_CIVILIZATIONS_DATA_FAILED,

    ACTION_GET_UNITS_DATA_REQUESTED,
    ACTION_GET_UNITS_DATA_SUCCEEDED,
    ACTION_GET_UNITS_DATA_FAILED,

    ACTION_GET_STRUCTURES_DATA_REQUESTED,
    ACTION_GET_STRUCTURES_DATA_SUCCEEDED,
    ACTION_GET_STRUCTURES_DATA_FAILED,

    ACTION_GET_TECHNOLOGIES_DATA_REQUESTED,
    ACTION_GET_TECHNOLOGIES_DATA_SUCCEEDED,
    ACTION_GET_TECHNOLOGIES_DATA_FAILED,

    ACTION_GET_ITEM_DETAILS_REQUESTED,
    ACTION_GET_ITEM_DETAILS_SUCCEEDED,
    ACTION_GET_ITEM_DETAILS_FAILED,

    ACTION_GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED,
    ACTION_GET_UNIQUE_CREATED_IN_DETAILS_SUCCEEDED,
    ACTION_GET_UNIQUE_CREATED_IN_DETAILS_FAILED,

    ACTION_GET_UNIQUE_TECH_DETAILS_REQUESTED,
    ACTION_GET_UNIQUE_TECH_DETAILS_SUCCEEDED,
    ACTION_GET_UNIQUE_TECH_DETAILS_FAILED,

    ACTION_GET_UNIQUE_UNIT_DETAILS_REQUESTED,
    ACTION_GET_UNIQUE_UNIT_DETAILS_SUCCEEDED,
    ACTION_GET_UNIQUE_UNIT_DETAILS_FAILED

} from '../actions';

describe('*** ACTIONS ***', () => {
    describe('ACTION_GET_CIVILIZATIONS_DATA_REQUESTED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedPath = 'Test path'
                        const mockedAction = {
                            type: 'GET_CIVILIZATIONS_DATA_REQUESTED',
                            path: mockedPath,
                        };
                        expect(ACTION_GET_CIVILIZATIONS_DATA_REQUESTED(mockedPath)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_CIVILIZATIONS_DATA_SUCCEEDED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = []
                        const mockedAction = {
                            type: 'GET_CIVILIZATIONS_DATA_SUCCEEDED',
                            payload: mockedData,
                        };
                        expect(ACTION_GET_CIVILIZATIONS_DATA_SUCCEEDED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_CIVILIZATIONS_DATA_FAILED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = 'test'
                        const mockedAction = {
                            type: 'GET_CIVILIZATIONS_DATA_FAILED',
                            payload: mockedData,
                        };
                        expect(ACTION_GET_CIVILIZATIONS_DATA_FAILED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_UNITS_DATA_REQUESTED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = 'test'
                        const mockedAction = {
                            type: 'GET_UNITS_DATA_REQUESTED',
                            path: mockedData,
                        };
                        expect(ACTION_GET_UNITS_DATA_REQUESTED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_UNITS_DATA_SUCCEEDED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = []
                        const mockedAction = {
                            type: 'GET_UNITS_DATA_SUCCEEDED',
                            payload: mockedData,
                        };
                        expect(ACTION_GET_UNITS_DATA_SUCCEEDED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_UNITS_DATA_FAILED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = 'test'
                        const mockedAction = {
                            type: 'GET_UNITS_DATA_FAILED',
                            payload: mockedData,
                        };
                        expect(ACTION_GET_UNITS_DATA_FAILED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_STRUCTURES_DATA_REQUESTED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = 'test'
                        const mockedAction = {
                            type: 'GET_STRUCTURES_DATA_REQUESTED',
                            path: mockedData,
                        };
                        expect(ACTION_GET_STRUCTURES_DATA_REQUESTED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_STRUCTURES_DATA_SUCCEEDED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = []
                        const mockedAction = {
                            type: 'GET_STRUCTURES_DATA_SUCCEEDED',
                            payload: mockedData,
                        };
                        expect(ACTION_GET_STRUCTURES_DATA_SUCCEEDED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_STRUCTURES_DATA_FAILED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = 'test'
                        const mockedAction = {
                            type: 'GET_STRUCTURES_DATA_FAILED',
                            payload: mockedData,
                        };
                        expect(ACTION_GET_STRUCTURES_DATA_FAILED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_TECHNOLOGIES_DATA_REQUESTED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = 'test'
                        const mockedAction = {
                            type: 'GET_TECHNOLOGIES_DATA_REQUESTED',
                            path: mockedData,
                        };
                        expect(ACTION_GET_TECHNOLOGIES_DATA_REQUESTED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_TECHNOLOGIES_DATA_SUCCEEDED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = []
                        const mockedAction = {
                            type: 'GET_TECHNOLOGIES_DATA_SUCCEEDED',
                            payload: mockedData,
                        };
                        expect(ACTION_GET_TECHNOLOGIES_DATA_SUCCEEDED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_TECHNOLOGIES_DATA_FAILED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = 'test'
                        const mockedAction = {
                            type: 'GET_TECHNOLOGIES_DATA_FAILED',
                            payload: mockedData,
                        };
                        expect(ACTION_GET_TECHNOLOGIES_DATA_FAILED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_ITEM_DETAILS_REQUESTED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = 'test'
                        const mockedAction = {
                            type: 'GET_ITEM_DETAILS_REQUESTED',
                            path: mockedData,
                        };
                        expect(ACTION_GET_ITEM_DETAILS_REQUESTED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_ITEM_DETAILS_SUCCEEDED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = []
                        const mockedAction = {
                            type: 'GET_ITEM_DETAILS_SUCCEEDED',
                            payload: mockedData,
                        };
                        expect(ACTION_GET_ITEM_DETAILS_SUCCEEDED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_ITEM_DETAILS_FAILED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = 'test'
                        const mockedAction = {
                            type: 'GET_ITEM_DETAILS_FAILED',
                            payload: mockedData,
                        };
                        expect(ACTION_GET_ITEM_DETAILS_FAILED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = 'test'
                        const mockedAction = {
                            type: 'GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED',
                            path: mockedData,
                        };
                        expect(ACTION_GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_UNIQUE_CREATED_IN_DETAILS_SUCCEEDED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = []
                        const mockedAction = {
                            type: 'GET_UNIQUE_CREATED_IN_DETAILS_SUCCEEDED',
                            payload: mockedData,
                        };
                        expect(ACTION_GET_UNIQUE_CREATED_IN_DETAILS_SUCCEEDED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_UNIQUE_CREATED_IN_DETAILS_FAILED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = 'test'
                        const mockedAction = {
                            type: 'GET_UNIQUE_CREATED_IN_DETAILS_FAILED',
                            payload: mockedData,
                        };
                        expect(ACTION_GET_UNIQUE_CREATED_IN_DETAILS_FAILED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_UNIQUE_TECH_DETAILS_REQUESTED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = 'test'
                        const mockedAction = {
                            type: 'GET_UNIQUE_TECH_DETAILS_REQUESTED',
                            path: mockedData,
                        };
                        expect(ACTION_GET_UNIQUE_TECH_DETAILS_REQUESTED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_UNIQUE_TECH_DETAILS_SUCCEEDED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = []
                        const mockedAction = {
                            type: 'GET_UNIQUE_TECH_DETAILS_SUCCEEDED',
                            payload: mockedData,
                        };
                        expect(ACTION_GET_UNIQUE_TECH_DETAILS_SUCCEEDED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_UNIQUE_TECH_DETAILS_FAILED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = 'test'
                        const mockedAction = {
                            type: 'GET_UNIQUE_TECH_DETAILS_FAILED',
                            payload: mockedData,
                        };
                        expect(ACTION_GET_UNIQUE_TECH_DETAILS_FAILED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_UNIQUE_UNIT_DETAILS_REQUESTED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = 'test'
                        const mockedAction = {
                            type: 'GET_UNIQUE_UNIT_DETAILS_REQUESTED',
                            path: mockedData,
                        };
                        expect(ACTION_GET_UNIQUE_UNIT_DETAILS_REQUESTED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_UNIQUE_UNIT_DETAILS_SUCCEEDED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = []
                        const mockedAction = {
                            type: 'GET_UNIQUE_UNIT_DETAILS_SUCCEEDED',
                            payload: mockedData,
                        };
                        expect(ACTION_GET_UNIQUE_UNIT_DETAILS_SUCCEEDED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
    describe('ACTION_GET_UNIQUE_UNIT_DETAILS_FAILED', () => {
        describe('when', () => {
            describe('some action was dispatched', () => {
                describe('then', () => {
                    it('should return correct action', () => {
                        const mockedData = 'test'
                        const mockedAction = {
                            type: 'GET_UNIQUE_UNIT_DETAILS_FAILED',
                            payload: mockedData,
                        };
                        expect(ACTION_GET_UNIQUE_UNIT_DETAILS_FAILED(mockedData)).toEqual(mockedAction);
                    });
                });
            });
        });
    });
});