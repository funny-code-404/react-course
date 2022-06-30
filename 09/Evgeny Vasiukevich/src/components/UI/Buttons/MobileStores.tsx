import { memo } from 'react';
import styled from 'styled-components';
import appStore from '../../../assets/icons/icon-app-store.svg';
import googlePlay from '../../../assets/icons/icon-google-play.svg';

const MobileStores = () => {
    return (
        <StyledMobileStores>
            <img src={googlePlay} alt="Google Play" />
            <img src={appStore} alt="App Store" />
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

export default memo(MobileStores);