import styled from 'styled-components';
import { TextColorMain } from '../../styles/variables/style';
import { BagColorMain } from '../../styles/variables/style';
import { THotel } from '../../types/types';
import HotelItem from './HotelItem';

export type Props = {
    hotels: THotel[],
    title: string,
}

export const Hotels = ({hotels, title}: Props) => {
    return (
        <HotelContainer>
            <TitleHotels>
                {title}
            </TitleHotels>
            <HotelElements>
                {hotels.map(hotel => <HotelItem key={hotel.id} hotel={hotel}/>)}
            </HotelElements>
        </HotelContainer>
    );
};

export const HotelElements = styled.div`
    display: flex;
`;

export const HotelContainer = styled.div`
    width: 1440px;
    height: 822px;
    background-color: ${BagColorMain};
`;

export const TitleHotels = styled.h1`
    width: 363px;
    height: 47px;
    padding: 120px 539px 106px 442px;
    font-size: 40px;
    font-weight: 500;
    color: ${TextColorMain};
`;

