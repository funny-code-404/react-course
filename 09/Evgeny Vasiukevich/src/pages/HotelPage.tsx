import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Navbar from '../components/UI/Navbar/Navbar';
import { currentHotelSelector } from '../redux/hotels/selectors';

const HotelPage = () => {
    const hotel = useSelector(currentHotelSelector);

    return (
        <StyledContainer>
            <Navbar />
            <div className="container card">
                <img src={hotel?.imageUrl} alt="Hotel" className='card__image'/>
                <h2 className='card__title'>{hotel?.name}</h2>
                <p className='card__subtitle'>{`${hotel?.city}, ${hotel?.country}`}</p>
            </div>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    height: 100vh;

    .nav {
        background: ${({ theme }) => theme.colors.generalBlue};
    }

    .nav__container {
        max-width: 1240px;
        margin: 0 auto 10vh auto;
        padding: 5vh 20px;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            padding: 3vh 20px;
        }

        @media (max-width: ${({ theme }) => theme.media.small}) {
            padding: 2vh 20px;
            margin-bottom: 7vh;
        }
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__image {
            max-height: 60vh;
            width: 60%;
            object-fit: cover;
            margin-bottom: 24px;
        }
    }
`

export default HotelPage;