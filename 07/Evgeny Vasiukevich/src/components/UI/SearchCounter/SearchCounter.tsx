import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { actionChangeChildren, actionChangeCounterStates } from '../../../redux/searchCounter/actions';
import { searchCounterPropertiesSelector, searchCounterStatesSelector } from '../../../redux/searchCounter/selectors';
import MobileSearchCounterWindow from '../windows/MobileSearchCounterWindow';
import ModalCounter from './ModalCounter';
import { StyledContainer, StyledCounter } from './styles';

const SearchCounter = () => {
    const properties = useSelector(searchCounterPropertiesSelector);
    const states = useSelector(searchCounterStatesSelector);
    let { adults, children, agesChildren, rooms } = properties;
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLSelectElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { width } = useWindowDimensions();

    useOnClickOutside(containerRef, () => setIsOpen(false));

    const handleOpenClick = () => setIsOpen(!isOpen);
    
    const handleSelectChange = () => {
        dispatch(actionChangeCounterStates(
            {...states, 
                isSelectAvailable: false, 
                isSelectChange: true
            }
        ));

        dispatch(actionChangeChildren(
            { agesChildren: [...agesChildren, selectRef.current?.value ?? '0'] }
        ))
    };

    return (
        <StyledContainer ref={containerRef} isOpen={isOpen} >
                <StyledCounter onClick={handleOpenClick}>
                    {width > 768 ?
                        <span>
                            <p>{adults} Adults – {children} Children – {rooms} Rooms</p>
                        </span>
                        : <MobileSearchCounterWindow 
                            adults={adults} 
                            children={children} 
                            rooms={rooms}
                        />
                    }
                </StyledCounter>
                {isOpen && 
                    <ModalCounter 
                        selectRef={selectRef} 
                        selectChange={handleSelectChange}
                    /> 
                }
        </StyledContainer>
    );
};

export default SearchCounter;