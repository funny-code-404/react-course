import { memo } from 'react';
import styled from 'styled-components';
import appStore from '../../../assets/icons/apps/icon-app-store.svg';
import googlePlay from '../../../assets/icons/apps/icon-google-play.svg';

const MobileStores = () => {
    return (
        <StyledMobileStores>
            <StyledImage src={googlePlay} alt="Google Play" />
            <StyledImage src={appStore} alt="App Store" />
        </StyledMobileStores>
    );
};

const StyledMobileStores = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 16px;
    margin: auto;
`
const StyledImage = styled.img`
    cursor: pointer;
`

export default memo(MobileStores);