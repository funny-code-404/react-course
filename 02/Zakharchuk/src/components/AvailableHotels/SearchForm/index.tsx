import { ChangeEvent } from 'react';
import styled from 'styled-components';

type Props = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Form = ({ onChange}: Props) => {
    return (
        <div>
            <SearchHotel onChange = { onChange } placeholder= "Enter destination or hotel name" />
        </div>
    );
};

export const SearchHotel = styled.input`
    width: 430px;
    height: 64px;
    font-size: 18px;
    border: solid 1px orange;
    border-radius: 8px;
`;

