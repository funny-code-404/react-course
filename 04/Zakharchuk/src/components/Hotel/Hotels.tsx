import styled from 'styled-components';
import { TextColorMain } from '../../styles/variables/style';
import { BagColorMain } from '../../styles/variables/style';
import { THotel } from '../../types/types';
import { FontSizeXXL } from '../../styles/variables/style';
import { FontWeightsMedium } from '../../styles/variables/style';
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
            <ContainerElements>
                <HotelElements>
                    {hotels.map(hotel => <HotelItem key={hotel.id} hotel={hotel}/>)}
                </HotelElements>
            </ContainerElements>
        </HotelContainer>
    );
};

export const HotelElements = styled.div`
    display: flex;
    overflow:hidden ;
`;

export const HotelContainer = styled.div`
    width: 1440px;
    height: 822px;
    background-color: ${BagColorMain};
`;

export const TitleHotels = styled.h1`
    width: 463px;
    height: 47px;
    margin: 120px auto;
    padding-top: 120px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${ FontSizeXXL };
    font-weight: ${ FontWeightsMedium };
    color: ${TextColorMain};
`;

export const ContainerElements = styled.div`
    display: flex;
    width: 1440px;
    padding: 0px 101px 120px 35px;
`;


