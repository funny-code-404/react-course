import { useSelector } from 'react-redux';
import { themeSelector } from '../../redux/theme/selectors';
import MobileStores from '../UI/Buttons/MobileStores';
import Navbar from '../UI/Navbar/Navbar';
import SearchBar from '../UI/SearchBar/SearchBar';
import { StyledHeader, StyledTitle } from './styles';

const HomePage = () => {
    const theme = useSelector(themeSelector);

    return (
        <StyledHeader themeBg={theme} className='home-page'>
            <div className='container home-page__container'>
                <Navbar/>
                <StyledTitle>Discover stays <span>to live, work or just relax</span></StyledTitle>
                <SearchBar />
                <MobileStores />
            </div>
        </StyledHeader>
    );
};

export default HomePage;