import styled from 'styled-components';
import logo from '../../../assets/icons/logo.svg'
import toggle from '../../../assets/icons/toggle.svg'
import account from '../../../assets/icons/account.svg'


export const Navigation = () => {
    return (
        <NavigationWrapper>
            <div>
                <Logo src={logo} alt='logo'/>
            </div>
            <NavBar>
                <StaysLink href="/">Stays</StaysLink>
                <AttaractionsLink href="/">Attractions</AttaractionsLink>
                <ToggleLink href='/'><img src={toggle}/></ToggleLink>
                <AccountLink href='/'><img src={account}/></AccountLink>
            </NavBar>
        </NavigationWrapper>
    );
};

export const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1232px;
    height: 46px;
    margin: 0 auto;
`;

export const Logo = styled.img`
    width: 205px;
    height: 40px;  
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
`;

export const StaysLink = styled.a`
  width: 59px;
  height: 28px;
  margin-right: 24px;
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
`;

export const AttaractionsLink = styled.a`
  width: 118px;
  height: 28px;
  margin-right: 48px;
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
`;

export const ToggleLink = styled.a`
  width: 30px;
  height: 30px;
  margin-right: 24px;
`;

export const AccountLink = styled.a`
  width: 40px;
  height: 40px;  
`;
