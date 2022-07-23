import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Navbar from '../components/UI/Navbar/Navbar';
import { currentHotelSelector } from '../redux/hotels/selectors';
import { getFontsFragment } from '../utils/utils';

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
    background: ${({ theme }) => theme.colors.bgColor};

    .nav {
        background: #10367C;
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
            max-height: 55vh;
            width: 60%;
            object-fit: cover;
            margin-bottom: 24px;

            @media (max-width: ${({ theme }) => theme.media.large}) {
                max-height: 75vh;
                width: 80%;
            }
        }
    }

    .card__title {
        margin-bottom: 24px;
        ${getFontsFragment('lg')}
        color: ${({ theme }) => theme.colors.generalBlue};
        text-align: start;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            margin-bottom: 12px;
            ${getFontsFragment('md')}
        }
    }

    .card__subtitle {
        margin-bottom: 24px;
        ${getFontsFragment('lg')}
        color: ${({ theme }) => theme.colors.secondaryText};
        text-align: start;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            margin-bottom: 0;
            ${getFontsFragment('md')}
        }
    }
`

export default HotelPage;