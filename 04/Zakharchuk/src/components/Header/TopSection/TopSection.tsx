import React, {ChangeEvent, FormEvent, memo, useEffect, useState} from "react";
import { MarketLinks } from '../MarketLinks/MarketsLinks';
import { SearchForm } from '../SearchForm/SearchForm';
import { Navigation } from '../Navigation/Navigation';
import { HeaderSection } from '../../../styles/stylesForTopSection/style';
import { TitleTopSection } from '../../../styles/stylesForTopSection/style';
import { SubtitleWrapper } from '../../../styles/stylesForTopSection/style';
import { SubtitleInputSearch } from '../../../styles/stylesForTopSection/style';
import { SubtitleInputData } from '../../../styles/stylesForTopSection/style';

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