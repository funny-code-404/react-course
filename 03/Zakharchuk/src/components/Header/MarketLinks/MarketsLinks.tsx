import React from 'react';
import google_play from '../../../assets/images/google_play.png'
import app_store from '../../../assets/images/app_store.png'
import styled from 'styled-components';

export const MarketLinks = () => {
    return (
        <MarketContainer>
            <GooglePlayLink href='/'><img  src={ app_store }/></GooglePlayLink>
            <AppStoreLink href='/'><img  src={ google_play }/></AppStoreLink>
        </MarketContainer>
    );
};

export const MarketContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 120px auto;
  width: 270px;
  height: 40px;  
`;

export const GooglePlayLink = styled.a`
  width: 135px;
  height: 40px;  
`;

export const AppStoreLink = styled.a`
  width: 119px;
  height: 40px;  
`;

