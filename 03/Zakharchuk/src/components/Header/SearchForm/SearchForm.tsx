import { FormEvent, ChangeEvent } from 'react';
import styled from 'styled-components';

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
                    <ButtonSearch>Search</ButtonSearch>
                </SearchFormInput>
            </div>
        </div>
    );
};

export const SearchHotel = styled.input`
    width: 430px;
    height: 64px;
    margin: 0px 104px 120px 104px;
    font-size: 18px;
    border: none;
    border-radius: 8px;
`;  

export const SearchFormInput = styled.form`
  display: flex;
  width: 1232px;
  height: 64px;
`;

export const ButtonSearch = styled.button`
   padding: 20px 57px;
   font-size: 24px;
   font-weight: 500;
   color: #fff;
   background: #3077C6;
   border:none;
   border-radius: 8px;
   &:hover {
        border: 2px solid #F5BD41;
    }
;

`;

