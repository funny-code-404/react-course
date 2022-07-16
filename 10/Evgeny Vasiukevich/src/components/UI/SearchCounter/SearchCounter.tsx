import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { actionChangeChildren, actionChangeCounterStates } from '../../../redux/searchBar/actions';
import { searchBarCounterPropertiesSelector, searchBarCounterStatesSelector } from '../../../redux/searchBar/selectors';
import MobileSearchCounterWindow from '../windows/MobileSearchCounterWindow';
import ModalCounter from './ModalCounter';
import { StyledContainer, StyledCounter } from './styles';

const SearchCounter = () => {
    const dispatch = useDispatch();
    const properties = useSelector(searchBarCounterPropertiesSelector);
    const states = useSelector(searchBarCounterStatesSelector);
    let { adults, children, rooms } = properties;
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

        dispatch(actionChangeChildren( [...children, selectRef.current?.value ?? '0'] ));
    };

    return (
        <StyledContainer ref={containerRef} isOpen={isOpen} >
                <StyledCounter onClick={handleOpenClick}>
                    {width > 768 ?
                        <span>
                            <p>{adults} Adults – {children.length} Children – {rooms} Rooms</p>
                        </span>
                        : <MobileSearchCounterWindow 
                            adults={adults} 
                            children={children.length} 
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