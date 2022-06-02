import { ChangeEvent, FormEvent, MouseEvent} from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import { generalWhite, strokeColor, textColor, textMd } from '../../../styles/config/variables';

type TChangeEvent = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onRender: (event: MouseEvent<HTMLButtonElement>) => void,
}

const SearchForm = ({ onChange, onRender }: TChangeEvent) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <Form className='form-search' onSubmit={handleSubmit}>
            <input type="text" placeholder='Search...' className='form-search__input' onChange={onChange}/>
            <Button onClick={onRender}>Search</Button>
        </Form>
    );
};

const Form = styled.form`
    align-self: center;
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    margin-bottom: 20px;
    padding-left: 24px;
    ${textMd}
    color: ${textColor};
    background: ${generalWhite};
    border: 3px solid ${strokeColor};
    border-radius: 8px;

    & > input::-webkit-input-placeholder { 
        ${textMd}
        color: ${textColor}; 
    }
`

export default SearchForm;