import styled from 'styled-components';
import { GeneralWhite } from '../variables/style';
import { FontSizeLG } from '../variables/style';
import { FontWeightsRegular } from '../variables/style';
import { AccentYellow } from '../variables/style';
import  AccountHover  from '../../assets/icons/account_hover.svg';

export const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 1192px;
    height: 46px;
    margin-left: 104px;
    margin-bottom: 196px;
`;

export const Logo = styled.img`
    width: 205px;
    height: 40px;  
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  width: 343px;
  margin-left: 600px;
`;

export const StaysLink = styled.a`
  width: 59px;
  height: 28px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
  font-size: ${FontSizeLG};
  font-weight: ${ FontWeightsRegular };
  color: ${ GeneralWhite };
  text-decoration: none;
  :hover {
    border-bottom: 4px solid ${ AccentYellow };
  }
  :active {
    border-bottom: 4px solid ${ AccentYellow };
  }
`;

export const AttaractionsLink = styled.a`
  width: 118px;
  height: 28px;
  margin-left: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: ${ FontSizeLG };
  font-weight: ${ FontWeightsRegular };
  color: ${ GeneralWhite };
  text-decoration: none;
  :hover {
    border-bottom: 4px solid ${ AccentYellow };
  }
  :active {
    border-bottom: 4px solid ${ AccentYellow };
  }
`;

export const ToggleLink = styled.a`
  width: 30px;
  height: 30px;
  margin-left: 48px;
`;

export const AccountLink = styled.a`
  width: 40px;
  height: 40px; 
  margin-left: 24px ;
`;