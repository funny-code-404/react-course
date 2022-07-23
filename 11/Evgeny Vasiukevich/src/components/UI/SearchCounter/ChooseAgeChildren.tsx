import { LegacyRef } from 'react';
import { StyledChoose } from './styles';

type Props = {
    selectRef: LegacyRef<HTMLSelectElement>,
    selectChange: () => void,
    agesChildren: string[],
}

const ChooseAgeChildren = ({ selectRef, selectChange, agesChildren }: Props) => {
    const years = new Array(18).fill(0).map((item, index) => item = index);

    return (
        <StyledChoose>
            <p>What is the age of the child you’re travelling with?</p>
            <select 
                name="Age of the child" 
                ref={selectRef} 
                value={agesChildren[agesChildren.length - 1] ?? '0'}
                onChange={selectChange}
            >
                {years.map((item) => <option key={item} value={item} >{`${item} years old`}</option>)}
            </select>
        </StyledChoose>
    );
};

export default ChooseAgeChildren;