import MobileStores from '../UI/Buttons/MobileStores';
import Navbar from '../UI/Navbar/Navbar';
import SearchBar from '../UI/SearchBar/SearchBar';
import { StyledHeader, StyledTitle } from './styles';

const HomePage = () => {
    return (
        <StyledHeader className='home-page'>
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