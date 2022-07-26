import { memo } from 'react';
import { StyledOffers } from './styles';
import supportImage from '../../assets/offers/offer-support.svg';
import communicateImage from '../../assets/offers/offer-communicate.svg';
import bookOnlineImage from '../../assets/offers/offer-book-online.svg';
import realReviewsImage from '../../assets/offers/offer-real-reviews.svg';
import { useSelector } from 'react-redux';
import { themeSelector } from '../../redux/theme/selectors';
import { ThemeEnum } from '../../interfaces/styled';

const Offers = () => {
    const theme = useSelector(themeSelector);
    const isLightTheme = theme === ThemeEnum.LIGHT;

    return (
        <StyledOffers themeState={isLightTheme} >
            <div className='container offers__container'>
                <h2 className='offers__title'>What do we offer</h2>
                <div className='offers'>
                    <div className='offer'>
                        <img src={supportImage} alt="Support" />
                        <h4>Support 24/7</h4>
                    </div>
                    <div className='offer'>
                        <img src={communicateImage} alt="Communicate" />
                        <h4>Communicate directly</h4>
                    </div>
                    <div className='offer'>
                        <img src={bookOnlineImage} alt="Book online" />
                        <h4>Book online</h4>
                    </div>
                    <div className='offer'>
                        <img src={realReviewsImage} alt="Real reviews" />
                        <h4>Real guest reviews</h4>
                    </div>
                </div>
            </div>
        </StyledOffers>
    );
};

export default memo(Offers);