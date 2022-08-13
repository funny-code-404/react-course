import {addAdults, removeAdults, addChildren, removeChildren, addRooms, removeRooms} from "./actions"

export type InitialBookingStateType = {
    guestData: {
        adultsValue: number,
        childrenValue: number,
        roomsValue: number,
    }
}

export const initialBookingState: InitialBookingStateType = {
    guestData: {
        adultsValue: 0,
        childrenValue: 0,
        roomsValue: 0,
    }
};

type ActionType = {
    type: string,
    payload: number,
}

export const bookingReducer = (state = initialBookingState, action: ActionType) => {
    switch (action.type) {
        case  removeAdults:
            return {
                ...state,
                guestData: {
                    adultsValue: action.payload,
                    childrenValue: state.guestData.childrenValue,
                    roomsValue: state.guestData.roomsValue,
                }
            };
        case  addAdults:
            return {
                ...state,
                guestData: {
                    adultsValue: action.payload,
                    childrenValue: state.guestData.childrenValue,
                    roomsValue: state.guestData.roomsValue,
                }
            };
        case addChildren:
            return {
                ...state,
                guestData: {
                    adultsValue: state.guestData.adultsValue,
                    childrenValue: action.payload,
                    roomsValue: state.guestData.roomsValue,
                }
            };
        case removeChildren:
            return {
                ...state,
                guestData: {
                    adultsValue: state.guestData.adultsValue,
                    childrenValue: action.payload,
                    roomsValue: state.guestData.roomsValue,
                }
            };
        case addRooms:
            return {
                ...state,
                guestData: {
                    adultsValue: state.guestData.adultsValue,
                    childrenValue: state.guestData.childrenValue,
                    roomsValue: action.payload,
                }
            };
        case removeRooms:
            return {
                ...state,
                guestData: {
                    adultsValue: state.guestData.adultsValue,
                    childrenValue: state.guestData.childrenValue,
                    roomsValue: action.payload,
                }
            };
        default:
            return state;
    }
}