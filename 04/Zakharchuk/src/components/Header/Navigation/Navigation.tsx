import { NavigationWrapper } from '../../../styles/stylesForNavigation/style';
import { Logo } from '../../../styles/stylesForNavigation/style';
import { NavBar } from '../../../styles/stylesForNavigation/style';
import { StaysLink } from '../../../styles/stylesForNavigation/style';
import { AttaractionsLink } from '../../../styles/stylesForNavigation/style';
import { ToggleLink } from '../../../styles/stylesForNavigation/style';
import { AccountLink } from '../../../styles/stylesForNavigation/style';
import logo from '../../../assets/icons/logo.svg';
import toggle from '../../../assets/icons/toggle.svg';
import account from '../../../assets/icons/account.svg';


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

