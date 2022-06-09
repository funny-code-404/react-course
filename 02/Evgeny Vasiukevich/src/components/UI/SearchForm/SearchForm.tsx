import { ChangeEvent, FormEvent, MouseEvent} from 'react';
import Button from '../Button/Button';

type TChangeEvent = {
    onFilter: (event: ChangeEvent<HTMLInputElement>) => void,
    onRender: (event: MouseEvent<HTMLButtonElement>) => void,
}

const SearchForm = ({ onFilter, onRender }: TChangeEvent) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <form className='form-search' onSubmit={handleSubmit}>
            <input type="text" placeholder='Search...' className='form-search__input' onChange={onFilter}/>
            <Button onClick={onRender}>Search</Button>
        </form>
    );
};

export default SearchForm;