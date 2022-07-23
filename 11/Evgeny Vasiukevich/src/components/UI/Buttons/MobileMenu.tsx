import { memo } from 'react';
import styled from 'styled-components';
import iconClose from '../../../assets/icons/navbar/icon-close.svg';
import iconHamburger from '../../../assets/icons/navbar/icon-hamburger.svg';

type Props = {
    isClick: boolean,
    onClick: () => void,
}

const MobileMenu = ({ isClick, onClick }: Props) => {
    return (
        <button className='nav__mobile-menu' onClick={onClick}>
            <StyledImg src='' isClick={isClick} alt="" />
        </button>
    );
};

type TImgProps = {
    isClick: boolean,
}

const StyledImg = styled.img.attrs<TImgProps>(({ isClick }) => ({
    alt: isClick ? 'Close' : 'Menu',
    src: isClick ? iconClose : iconHamburger
}))<TImgProps>`
    width: 24px;
`

export default memo(MobileMenu);