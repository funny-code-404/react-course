import { useRef } from 'react';
import { useGuestsRoomsCounter, useStatesWindowCouner } from '../../../hooks/useCounter';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { TCounter } from '../../../types/types';
import ModalCounter from './ModalCounter';
import { StyledContainer, StyledCounter } from './styles';

const GuestsRoomsCounter = () => {
    const { width } = useWindowDimensions();
    const {count, setCount, condition} = useGuestsRoomsCounter();
    const {isOpen, setIsOpen, isSelectOpen, setIsSelectOpen, isSelectChange, setIsSelectChange} = useStatesWindowCouner();
    const selectRef = useRef<HTMLSelectElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(containerRef, () => setIsOpen(false));

    function onIncrease(category: TCounter) {
        if (condition.increase[category]) setCount({...count, [category]: count[category] += 1});

        if (category === 'children') {
            setIsSelectChange(false);
            setIsSelectOpen(true);
        };
    }

    function onDecrease(category: TCounter) {
        if (condition.decrease[category]) setCount({...count, [category]: count[category] -= 1});

        if (category === 'children') {
            setIsSelectOpen(false);
            setIsSelectChange(true);
        };

        if (isSelectChange && count.agesChildren.length) --count.agesChildren.length;
    };

    const handleOpenClick = () => setIsOpen(!isOpen);

    const handleSelectChange = () => {
        setIsSelectOpen(false);
        setIsSelectChange(true);
        setCount({...count, agesChildren: [...count.agesChildren, selectRef.current?.value ?? '0']});
    };

    return (
        <StyledContainer ref={containerRef} isOpen={isOpen} >
                <StyledCounter onClick={handleOpenClick}>
                    {width > 768 ?
                    <span>
                        <p>{count.adults} Adults – {count.children} Children – {count.rooms} Rooms</p>
                    </span>
                    : <>
                        <div>
                            <h6>Adults</h6>
                            <p>{count.adults}</p>
                        </div>
                        <div>
                            <h6>Children</h6>
                            <p>{count.children}</p>
                        </div>
                        <div>
                            <h6>Rooms</h6>
                            <p>{count.rooms}</p>
                        </div>
                    </>}
                </StyledCounter>
                {isOpen && 
                    <ModalCounter 
                        count={count} 
                        onIncrease={onIncrease} 
                        onDecrease={onDecrease} 
                        selectRef={selectRef} 
                        isSelectChange={isSelectChange}
                        isSelectOpen={isSelectOpen}
                        selectChange={handleSelectChange}
                    /> 
                }
        </StyledContainer>
    );
};

export default GuestsRoomsCounter;