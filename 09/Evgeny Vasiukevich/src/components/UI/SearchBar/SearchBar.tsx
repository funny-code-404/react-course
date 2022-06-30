import { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RefsContext } from '../../../context/RefsContext';
import { getAvailableHotels } from '../../../redux/hotels/middlewares';
import Button from '../Buttons/Button';
import Datepicker from '../Inputs/Datepicker/Datepicker';
import SearchInput from '../Inputs/SearchInput/SearchInput';
import SearchCounter from '../SearchCounter/SearchCounter';
import { StyledForm } from './styles';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const [previousSearchValue, setPreviousSearchValue] = useState(searchValue);
    const searchRef = useRef<HTMLInputElement>(null);
    const { toAvailableHotelsRef } = useContext(RefsContext);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (previousSearchValue !== searchValue) {
            dispatch(getAvailableHotels(searchValue) as any);
            toAvailableHotelsRef?.current?.scrollIntoView({ behavior: 'smooth' });
        };
        
        setPreviousSearchValue(searchValue);
        setSearchValue('');
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => setSearchValue(event.target.value);

    return (
        <StyledForm className='form-search' onSubmit={handleSubmit}>
            <SearchInput searchRef={searchRef} searchValue={searchValue} handleChange={handleChange} />
            <Datepicker/>
            <SearchCounter/>
            <Button>Search</Button>
        </StyledForm>
    );
};

export default SearchBar;