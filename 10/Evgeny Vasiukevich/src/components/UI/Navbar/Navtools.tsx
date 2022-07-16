import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import iconThemeDark from '../../../assets/icons/icon-theme-dark.svg';
import iconThemeLight from '../../../assets/icons/icon-theme-light.svg';
import iconSignIn from '../../../assets/icons/icon-sign-in.svg';
import { ThemeEnum } from '../../../interfaces/styled';
import { actionSwitchDarkTheme, actionSwitchLightTheme } from '../../../redux/theme/actions';
import { themeSelector } from '../../../redux/theme/selectors';

const Navtools = () => {
    const theme = useSelector(themeSelector);
    const dispatch = useDispatch();
    const isLightTheme = theme === ThemeEnum.LIGHT;

    function handleClick() {
        isLightTheme ?
        dispatch(actionSwitchDarkTheme())
        : dispatch(actionSwitchLightTheme())
    }

    return (
        <div className='nav__tools'>
            <button className='nav__toggle-theme' onClick={handleClick}>
                <img src={isLightTheme ? iconThemeDark : iconThemeLight} alt="Night theme" className='nav__check-icon'/>
            </button>
            <a className='nav__login'>
                <img src={iconSignIn} alt="Sign-in/out" className='nav__login-icon'/>
            </a>
        </div>
    );
};

export default memo(Navtools);