import { useSelector } from 'react-redux';
import { StyledHeader } from '../components/HomePage/styles';
import Navbar from '../components/UI/Navbar/Navbar';
import AuthWindow from '../components/UI/windows/AuthWindow/AuthWindow';
import { themeSelector } from '../redux/theme/selectors';

const AuthPage = () => {
    const theme = useSelector(themeSelector);

    return (
        <StyledHeader themeBg={theme}>
            <div className='container auth-page__container'>
                <Navbar/>
                <AuthWindow/>
            </div>
        </StyledHeader>
    );
};

export default AuthPage;