import React from 'react';

import { StyledListRate, StyledText, Styledtextarea, StyledTitle, StyledRadioContainer } from './style.js';

const WithAccountDeleting = () => {
    return (
        <div>
            <StyledTitle>Удаление аккаунта</StyledTitle>
            <Styledtextarea></Styledtextarea>
            <p>Оцените работу приложения</p>
            <StyledListRate>
                <StyledText>1</StyledText>
                <StyledText>2</StyledText>
                <StyledText>3</StyledText>
                <StyledText>4</StyledText>
                <StyledText>5</StyledText>
            </StyledListRate>
            <StyledRadioContainer>
                <input type="radio" value="1" />
                <input type="radio" value="2" />
                <input type="radio" value="3" />
                <input type="radio" value="4" />
                <input type="radio" value="5" />
            </StyledRadioContainer>
        </div>
    )
}

export default WithAccountDeleting();