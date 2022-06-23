import React, {ChangeEvent, FormEvent, memo, useEffect, useState} from "react";
import {data} from "../../data";
import styled from 'styled-components';
import HeaderBackground from "../../../assets/images/header_bg.png"
import { MarketLinks } from '../MarketLinks/MarketsLinks';
import { SearchForm } from '../SearchForm/SearchForm';
import { Navigation } from '../Navigation/Navigation';

type Props = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    value: string;
}

export const TopSection = ({onChange, onSubmit, value}: Props) => {
    return (
        <HeaderSection>
            <Navigation />
            <TitleTopSection>Discover stays to live, work or just relax</TitleTopSection>
            <SubtitleWrapper>
                <SubtitleInputSearch>Your destination or hotel name</SubtitleInputSearch>
                <SubtitleInputData>Check-in — Check-out</SubtitleInputData>
            </SubtitleWrapper>
            <SearchForm value={value} onSubmit={onSubmit} onChange={onChange}/>
            <MarketLinks/>
        </HeaderSection>
    );
};

export const HeaderSection = styled.div`
    width: 1440px;
    height: 900px;
    padding-top: 51px;
    background-image: url(${HeaderBackground});
    background-repeat: no-repeat;
`;

export const TitleTopSection = styled.h2`
  width: 542px;
  height: 118px;
  margin: 196px 794px 100px 104px;
  font-size: 50px;
  font-weight: 500;
  color:#fff;
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 640px;
  height: 25px;  
  margin: 100px 672px 24px 128px;
`;

export const SubtitleInputSearch = styled.h4`
    width: 246px;
    height: 21px;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
`;

export const SubtitleInputData = styled.h4`
    width: 173px;
    height: 21px;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
`;