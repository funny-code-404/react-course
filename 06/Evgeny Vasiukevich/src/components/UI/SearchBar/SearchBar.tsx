import { FormEvent, useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext/SearchContext';
import Button from '../Buttons/Button';
import GuestsRoomsCounter from '../GuestsRoomsCounter/GuestsRoomsCounter';
import Datepicker from '../Inputs/Datepicker/Datepicker';
import SearchInput from '../Inputs/SearchInput';
import { StyledForm } from './styles';

const SearchBar = () => {
    const { handleRender } = useContext(SearchContext);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <StyledForm className='form-search' onSubmit={handleSubmit}>
            <SearchInput />
            <Datepicker/>
            <GuestsRoomsCounter/>
            <Button onClick={handleRender}>Search</Button>
        </StyledForm>
    );
};

export default SearchBar;