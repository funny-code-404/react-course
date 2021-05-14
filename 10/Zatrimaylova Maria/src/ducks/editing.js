//ACTIONS
export const EDITING_STARTED = 'EDITING_STARTED';
export const EDITING_COMPLETED = 'EDITING_COMPLETED';

//ACTION CREATORS
export const ACTION_EDITING_STARTED = value => ({
    type: EDITING_STARTED,
    payload: value,
});

export const ACTION_EDITING_COMPLETED = value => ({
    type: EDITING_COMPLETED,
    payload: value,
});

//REDUCERS
export const initialEditingState = {
    isEditing: false,
    editingId: null,  
};

export const editing = (prevState = initialEditingState, action) => {
    switch (action.type) {
        case EDITING_STARTED:
            return {
                ...prevState,
                isEditing: true,
                editingId: action.payload,
            };
        case EDITING_COMPLETED:
            return {
                ...prevState,
                isEditing: false,
                editingId: null,
            }
        default: 
            return {
                ...prevState,
            };
    }
}