import { memo } from 'react';
import iconNight from '../../../assets/icons/icon-night.svg';
import iconSignIn from '../../../assets/icons/icon-sign-in.svg';

const Navtools = () => {
    return (
        <div className='nav__tools'>
            <button className='nav__toggle-theme'>
                <img src={iconNight} alt="Night theme" className='nav__check-icon'/>
            </button>
            <a className='nav__login'>
                <img src={iconSignIn} alt="Sign-in/out" className='nav__login-icon'/>
            </a>
        </div>
    );
};

export default memo(Navtools);