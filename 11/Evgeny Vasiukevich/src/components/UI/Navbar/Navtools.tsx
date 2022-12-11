import { memo, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import iconAuth from '../../../assets/icons/navbar/icon-auth.svg';
import iconSignIn from '../../../assets/icons/navbar/icon-sign-in.svg';
import iconThemeDark from '../../../assets/icons/navbar/icon-theme-dark.svg';
import iconThemeLight from '../../../assets/icons/navbar/icon-theme-light.svg';
import { AuthContext } from '../../../context/AuthContext/AuthContext';
import { auth } from '../../../firebase';
import { ThemeEnum } from '../../../interfaces/styled';
import { actionSwitchDarkTheme, actionSwitchLightTheme } from '../../../redux/theme/actions';
import { themeSelector } from '../../../redux/theme/selectors';
import SignOutWindow from '../windows/SignOutWindow';

const Navtools = () => {
    const theme = useSelector(themeSelector);
    const dispatch = useDispatch();
    const isLightTheme = theme === ThemeEnum.LIGHT;
    const [isOpen, setIsOpen] = useState(false);
    const { value, setItem } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleClick() {
        isLightTheme ?
        dispatch(actionSwitchDarkTheme())
        : dispatch(actionSwitchLightTheme())
    };

    function handleToggleClick() {
        if (!value.isAuth) {
            setIsOpen(!isOpen);
        };
    };
    
    function handleSignOutClick() {
        setIsOpen(false);
        auth.signOut();
        setItem({isAuth: true});
        navigate('/signin');
    };

    function handleCloseClick() {
        setIsOpen(false);
    };

    return (
        <div className='nav__tools'>
            <button className='nav__toggle-theme' onClick={handleClick} >
                <img src={isLightTheme ? iconThemeDark : iconThemeLight} alt="Night theme" className='nav__check-icon'/>
            </button>
            <a className='nav__login' onClick={handleToggleClick} >
                <img src={value.isAuth ? iconSignIn : iconAuth} alt="Sign in" className='nav__login-icon'/>
            </a>
            {isOpen &&
                <SignOutWindow handleClick={handleSignOutClick} handleCloseClick={handleCloseClick} />
            }
        </div>
    );
};

export default memo(Navtools);