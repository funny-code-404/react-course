import { ChangeEvent, memo, RefObject } from 'react';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import { StyledContainer, StyledInput } from './styles';

type Props = {
    searchRef: RefObject<HTMLInputElement>,
    searchValue: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

const SearchInput = ({ searchRef, searchValue, handleChange }: Props) => {
    const { width } = useWindowDimensions();

    return (
        <StyledContainer>
            <StyledInput 
                value={searchValue} 
                type="text" 
                placeholder={width <= 768 ? 'Your destination or hotel name' : 'Search...'}
                onChange={handleChange}
                ref={searchRef}
            />
        </StyledContainer>
    );
};

export default memo(SearchInput);