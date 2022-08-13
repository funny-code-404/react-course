const addAdults = "add_adults";
const removeAdults = "remove_adults";
const addChildren = "add_children";
const removeChildren = "remove_adults";
const addRooms = "add_rooms";
const removeRooms = "remove_rooms";

type addRemoveActionType = {
    type: string,
    payload: number,
}

const addAdultsAction = (value: number): addRemoveActionType => {
    ++value;

    return {
        type: addAdults,
        payload: value,
    }
};
const removeAdultsAction = (value: number): addRemoveActionType => {
    --value;

    return {
        type: removeAdults,
        payload: value,
    }
};
const addChildrenAction = (value: number): addRemoveActionType => {
    ++value;

    return {
        type: addChildren,
        payload: value,
    }
};
const removeChildrenAction = (value: number): addRemoveActionType => {
    --value;

    return {
        type: addChildren,
        payload: value,
    }
};
const addRoomsAction = (value: number): addRemoveActionType => {
    ++value;

    return {
        type: addRooms,
        payload: value,
    }
};
const removeRoomsAction = (value: number): addRemoveActionType => {
    --value;

    return {
        type: removeRooms,
        payload: value,
    }
};

export {
    addAdultsAction,
    removeAdultsAction,
    addChildrenAction,
    removeChildrenAction,
    addRoomsAction,
    removeRoomsAction
};
export {addAdults, removeAdults, addChildren, removeChildren, addRooms, removeRooms}