import { paths, titles } from '../../config';
import { NavLink } from 'react-router-dom';
import MainNavLink from '../MainNavlink';

const MainNavigation = () => {
    return (
        <>
            <div className='menu_link' >
                <NavLink
                    activeClassName="nav_active"
                    exact to={paths.home}>{titles.home}
                </NavLink>
            </div>
            <MainNavLink
                path={paths.civilizations}
                title={titles.civilizations}
            />
            <MainNavLink
                path={paths.units}
                title={titles.units}
            />
            <MainNavLink
                path={paths.structures}
                title={titles.structures}
            />
            <MainNavLink
                path={paths.technologies}
                title={titles.technologies}
            />
        </>
    )
}
export default MainNavigation