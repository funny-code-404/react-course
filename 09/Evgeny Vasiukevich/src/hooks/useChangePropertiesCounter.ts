import { useDispatch, useSelector } from "react-redux";
import { actionChangeAdults, actionChangeChildren, actionChangeCounterStates, actionChangeRooms } from "../redux/searchBar/actions";
import { searchBarCounterPropertiesSelector, searchBarCounterStatesSelector } from "../redux/searchBar/selectors";


export const useChangePropertiesCounter = () => {
    const properties = useSelector(searchBarCounterPropertiesSelector);
    const states = useSelector(searchBarCounterStatesSelector);
    let { adults, children, rooms } = properties;
    const dispatch = useDispatch();
    
    // Object for condition current value of different properties with base limit
    const condition = {
        increase: {
            adults: adults < 30,
            children: children.length < 10,
            rooms: rooms < 30,
        },
        decrease: {
            adults: adults > 0,
            children: children.length > 0,
            rooms: rooms > 1,
        }
    };

    // Functions for decreases
    function onDecreaseAdults() {
        if (condition.decrease.adults) {
            dispatch(actionChangeAdults( adults -= 1 ))
        }
    };

    function onDecreaseChildren() {
        if (condition.decrease.children) {
            dispatch(actionChangeChildren( children.filter((child, index) => index !== (children.length - 1)) ));
        };

        dispatch(actionChangeCounterStates(
            {...states, 
                isSelectAvailable: false, 
                isSelectChange: true
            }
        ));
    };

    function onDecreaseRooms() {
        if (condition.decrease.rooms) {
            dispatch(actionChangeRooms( rooms -= 1 ));
        };
    };

    // Functions for increases
    function onIncreaseAdults() {
        if (condition.increase.adults) {
            dispatch(actionChangeAdults( adults += 1 ));
        };
    };

    function onIncreaseChildren() {
        if (condition.increase.children) {
            dispatch(actionChangeChildren( [...children] ))
        };

        dispatch(actionChangeCounterStates(
            {...states, 
                isSelectAvailable: true, 
                isSelectChange: false
            }
        ));
    };

    function onIncreaseRooms() {
        if (condition.increase.rooms) {
            dispatch(actionChangeRooms( rooms += 1 ));
        };
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