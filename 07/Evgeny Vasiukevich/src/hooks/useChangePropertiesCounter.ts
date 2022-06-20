import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeElemsStateAction, changePropertiesAction, searchCounterTypesActions } from "../redux/searchCounter/actions";
import { initalState } from "../store/store";


export const useChangePropertiesCounter = () => {
    const {properties, states} = useSelector((state: initalState) => state.searchCounter);
    let { payload: { adults, children, rooms }} = properties;
    const dispatch = useDispatch();
    
    // Object for condition current value of different properties with base limit
    const condition = {
        increase: {
            adults: adults < 30,
            children: children < 10,
            rooms: rooms < 30,
        },
        decrease: {
            adults: adults > 0,
            children: children > 0,
            rooms: rooms > 1,
        }
    };

    // Functions for decreases
    function onDecreaseAdults() {
        if (condition.decrease.adults) {
            dispatch(changePropertiesAction(
                searchCounterTypesActions.ADULTS,
                {...properties.payload, 
                    adults: adults -= 1
                }
            ))
        }
    };

    function onDecreaseChildren() {
        const agesChildrenLength = properties.payload.agesChildren.length;

        if (condition.decrease.children) {
            dispatch(changePropertiesAction(
                searchCounterTypesActions.CHILDREN,
                {...properties.payload, 
                    children: children -= 1
                }
            ))
        };

        dispatch(changeElemsStateAction(
            {...states.payload, 
                isSelectAvailable: false, 
                isSelectChange: true
            }
        ));

        if (states.payload.isSelectAvailable && agesChildrenLength) {
            --properties.payload.agesChildren.length;
        };
    };

    function onDecreaseRooms() {
        if (condition.decrease.rooms) {
            dispatch(changePropertiesAction(
                searchCounterTypesActions.ROOMS,
                {...properties.payload, 
                    rooms: rooms -= 1
                }
            ))
        }
    };

    // Functions for increases
    function onIncreaseAdults() {
        if (condition.increase.adults) {
            dispatch(changePropertiesAction(
                searchCounterTypesActions.ADULTS,
                {...properties.payload, 
                    adults: adults += 1
                }
            ))
        }
    };

    function onIncreaseChildren() {
        if (condition.increase.children) {
            dispatch(changePropertiesAction(
                searchCounterTypesActions.CHILDREN,
                {...properties.payload, 
                    children: children += 1
                }
            ))
        };

        dispatch(changeElemsStateAction(
            {...states.payload, 
                isSelectAvailable: true, 
                isSelectChange: false
            }
        ));
    };

    function onIncreaseRooms() {
        if (condition.increase.rooms) {
            dispatch(changePropertiesAction(
                searchCounterTypesActions.ROOMS,
                {...properties.payload, 
                    rooms: rooms += 1
                }
            ))
        }
    };

    // Object with functions decreases and increases for different properties
    const propertiesChanges = {
        onDecrease: {
            adults: onDecreaseAdults,
            children: onDecreaseChildren,
            rooms: onDecreaseRooms,
        },
        onIncrease: {
            adults: onIncreaseAdults,
            children: onIncreaseChildren,
            rooms: onIncreaseRooms,
        },
    };

    return propertiesChanges;
}