import { ChangeEvent, FormEvent, MouseEvent} from 'react';
import Button from '../Buttons/Button';
import SearchInput from '../Inputs/SearchInput';
import Datepicker from '../Inputs/Datepicker/Datepicker';
import { StyledForm } from './styles';

type TChangeEvent = {
    searchValue: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onRender: (event: MouseEvent<HTMLButtonElement>) => void,
}

const SearchBar = ({ searchValue, onChange, onRender }: TChangeEvent) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <StyledForm className='form-search' onSubmit={handleSubmit}>
            <SearchInput searchValue={searchValue} onChange={onChange} />
            <Datepicker/>
            <Button onClick={onRender}>Search</Button>
        </StyledForm>
    );
};

export default SearchBar;