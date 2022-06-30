import React from 'react';
import googlePlay from '../../../assets/icons/icon-google-play.svg';
import appStore from '../../../assets/icons/icon-app-store.svg';
import styled from 'styled-components';

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

export default MobileStores;