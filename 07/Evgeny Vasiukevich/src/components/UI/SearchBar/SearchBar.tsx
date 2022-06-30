import { ChangeEvent, FormEvent, RefObject, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import ApiService from '../../../API/ApiService';
import { actionGetAllHotels } from '../../../redux/Hotels/actions';
import Button from '../Buttons/Button';
import Datepicker from '../Inputs/Datepicker/Datepicker';
import SearchInput from '../Inputs/SearchInput/SearchInput';
import SearchCounter from '../SearchCounter/SearchCounter';
import { StyledForm } from './styles';

type Props = {
    scrollRef: RefObject<HTMLDivElement>,
}

const SearchBar = ({ scrollRef }: Props) => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const searchRef = useRef<HTMLInputElement>(null);

    async function fetchAllHotels(value: string = '') {
        const response = await ApiService.getHotels(value);
        dispatch(actionGetAllHotels(response.data));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetchAllHotels(searchRef?.current?.value);
        setSearchValue('');
        scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
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