import styled from 'styled-components';
import { AccentBlue } from '../../styles/variables/style';
import { SecondaryText } from '../../styles/variables/style';
import { FontSizeLG } from '../../styles/variables/style';
import { FontWeightsRegular } from '../../styles/variables/style';
import { THotel } from '../../types/types';
import { GeneralBlue } from '../../styles/variables/style';


const HotelItem = ({hotel}:{hotel:THotel}) => {
    return (
        <Apartments>
            <HotelImages src={hotel.imageUrl} alt={hotel.name}/>
            <HotelName href='/'>{hotel.name}</HotelName>
            <HotelLocation>{hotel.city}, {hotel.country}</HotelLocation>
        </Apartments>
    );
};

export default HotelItem;

export const Apartments = styled.article`
    width: 296px;
    height: 435px;
    margin-left: 24px;
`;

export const HotelImages = styled.img`
    min-width: 296px;
    min-height: 296px;
    margin-bottom: 24px;
`;

export const HotelName = styled.a`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${ FontSizeLG };
    font-weight: ${ FontWeightsRegular };
    color: ${AccentBlue};
    text-decoration: none;
`;

export const HotelLocation = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: ${SecondaryText};
`;
