import styled from 'styled-components';
import { AccentBlue } from '../variables/style';
import { AccentYellow } from '../variables/style';
import { GeneralWhite } from '../variables/style';
import { TextColorMain } from '../variables/style';
import { FontSizeMD } from '../variables/style';
import { FontSizeLG } from '../variables/style';
import { FontWeightsMedium } from '../variables/style';

export const SearchHotel = styled.input`
    width: 430px;
    height: 64px;
    padding-left: 22px;
    font-size: ${ FontSizeMD };
    border: none;
    border-radius: 8px;
    background-color: ${ GeneralWhite };
    color: ${ TextColorMain };
    &:hover {
        border: 2px solid ${ AccentYellow };
    }
`;  

export const SearchFormInput = styled.form`
  display: flex;
  width: 1232px;
  height: 64px;
  margin-left: 104px;
  background:${ GeneralWhite };
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 8px;
`;

export const ButtonSearch = styled.button`
   padding: 20px 57px;
   font-size: ${ FontSizeLG };
   font-weight: ${ FontWeightsMedium };
   color: ${ GeneralWhite };
   background: ${ AccentBlue };
   border:none;
   border-radius: 8px;
`;