import styled from "styled-components";
import { Swiper } from 'swiper/react';
import iconNextArrow from '../../../assets/icons/icon-next-arrow.svg';
import iconPrevArrow from '../../../assets/icons/icon-prev-arrow.svg';

export const StyledSwiper = styled(Swiper)`
    & .swiper-slide {
        flex-shrink: 1;
    }

    & .swiper-button-next {
        position: absolute;
        z-index: 5;
        top: 148px;
        right: 0;
        width: 40px;
        height: 40px;
        background: no-repeat right url(${iconNextArrow});
        object-fit: cover;
        background-size: 100%;
        transform: translate(7%, -50%);
        cursor: pointer;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            top: 110px;
        }

        @media (max-width: ${({ theme }) => theme.media.small}) {
            top: 78px;
            width: 30px;
            height: 30px;
        }
    }

    & .swiper-button-prev {
        position: absolute;
        z-index: 5;
        top: 148px;
        left: 0;
        width: 40px;
        height: 40px;
        background: no-repeat url(${iconPrevArrow});
        object-fit: cover;
        background-size: 100%;
        transform: translate(-7%, -50%);
        cursor: pointer;

        @media (max-width: ${({ theme }) => theme.media.large}) {
            top: 110px;
        }

        @media (max-width: ${({ theme }) => theme.media.small}) {
            top: 78px;
            width: 30px;
            height: 30px;
        }
    }

    & .swiper-button-disabled {
        display: none;
    }
`