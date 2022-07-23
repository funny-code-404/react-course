import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import iconThemeDark from '../../../assets/icons/navbar/icon-theme-dark.svg';
import iconThemeLight from '../../../assets/icons/navbar/icon-theme-light.svg';
import iconSignIn from '../../../assets/icons/navbar/icon-sign-in.svg';
import iconAuth from '../../../assets/icons/navbar/icon-auth.svg';
import { ThemeEnum } from '../../../interfaces/styled';
import { actionSwitchDarkTheme, actionSwitchLightTheme } from '../../../redux/theme/actions';
import { themeSelector } from '../../../redux/theme/selectors';
import { auth } from '../../../firebase';
import SignOutWindow from '../windows/SignOutWindow';

const Navtools = () => {
    const theme = useSelector(themeSelector);
    const dispatch = useDispatch();
    const isLightTheme = theme === ThemeEnum.LIGHT;
    const [isAuth, setIsAuth] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        isLightTheme ?
        dispatch(actionSwitchDarkTheme())
        : dispatch(actionSwitchLightTheme())
    };

    function handleToggleClick() {
        if (!isAuth) {
            setIsOpen(!isOpen);
        };
    };
    
    function handleSignOutClick() {
        setIsOpen(false);
        auth.signOut();
    };

    function handleCloseClick() {
        setIsOpen(false);
    };

    useEffect(() => {
        auth.onAuthStateChanged(user => setIsAuth(!user));
    }, []);

    return (
        <div className='nav__tools'>
            <button className='nav__toggle-theme' onClick={handleClick} >
                <img src={isLightTheme ? iconThemeDark : iconThemeLight} alt="Night theme" className='nav__check-icon'/>
            </button>
            <a className='nav__login' onClick={handleToggleClick} >
                <img src={isAuth ? iconSignIn : iconAuth} alt="Sign in" className='nav__login-icon'/>
            </a>
            {isOpen &&
                <SignOutWindow handleClick={handleSignOutClick} handleCloseClick={handleCloseClick} />
            }
        </div>
    );
};

export default memo(Navtools);