import { RefObject } from 'react';
import MobileStores from '../UI/Buttons/MobileStores';
import Navbar from '../UI/Navbar/Navbar';
import SearchBar from '../UI/SearchBar/SearchBar';
import { StyledHeader, StyledTitle } from './styles';

type Props = {
    scrollRef: RefObject<HTMLDivElement>,
}

const HomePage = ({ scrollRef }: Props) => {
    return (
        <StyledHeader className='home-page'>
            <div className='container home-page__container'>
                <Navbar/>
                <StyledTitle>Discover stays <span>to live, work or just relax</span></StyledTitle>
                <SearchBar scrollRef={scrollRef} />
                <MobileStores />
            </div>
        </StyledHeader>
    );
};

export default HomePage;