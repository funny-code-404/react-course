import React from 'react';
import FormBase from './Components/FormBase';
import GlobalStyles from './Components/GlobalStyles/styles.js';

import { StyledContainer } from './style';

import WithAccountDeleting from './Components/hocs/withAccountDeleting';
import WithCheckIn from './Components/hocs/withCheckIn';
import WithLogIn from './Components/hocs/withLogIn';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledContainer>
        <FormBase variablePart={WithCheckIn} />
        <FormBase variablePart={WithLogIn} />
        <FormBase variablePart={WithAccountDeleting} />
      </StyledContainer>
    </>
  );
}

export default App;