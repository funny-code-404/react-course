import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { changeElemsStateAction, changePropertiesAction, searchCounterTypesActions } from '../../../redux/searchCounter/actions';
import { initalState } from '../../../store/store';
import MobileSearchCounterWindow from '../windows/MobileSearchCounterWindow';
import ModalCounter from './ModalCounter';
import { StyledContainer, StyledCounter } from './styles';

const SearchCounter = () => {
    const {properties, states} = useSelector((state: initalState) => state.searchCounter);
    let { payload: { adults, children, agesChildren, rooms }} = properties;
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLSelectElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { width } = useWindowDimensions();

    useOnClickOutside(containerRef, () => setIsOpen(false));

    const handleOpenClick = () => setIsOpen(!isOpen);
    
    const handleSelectChange = () => {
        dispatch(changeElemsStateAction(
            {...states.payload, 
                isSelectAvailable: false, 
                isSelectChange: true
            }
        ));

        dispatch(changePropertiesAction(
            searchCounterTypesActions.CHILDREN,
            {...properties.payload, 
                agesChildren: [...agesChildren, selectRef.current?.value ?? '0']
            }
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