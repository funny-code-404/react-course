import { FormEvent, ChangeEvent } from 'react';
import { DatePickerBlock } from '../BlockDate/DatePickerBlock';
import { SearchHotel } from '../../../styles/stylesForSearchForm/style';
import { SearchFormInput } from '../../../styles/stylesForSearchForm/style';
import { ButtonSearch } from '../../../styles/stylesForSearchForm/style';


type Props = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    value: string;
} 

const inputPlaceholderText = 'New York';

export const SearchForm = ({ onChange, onSubmit, value}: Props) => {
    return (
        <div>
            <div>
                <SearchFormInput onSubmit={onSubmit}>
                    <SearchHotel value = {value} type = "text" onChange = { onChange } placeholder= {inputPlaceholderText} />
                    <DatePickerBlock />
                    <ButtonSearch>Search</ButtonSearch>
                </SearchFormInput>
            </div>
        </div>
    );
};