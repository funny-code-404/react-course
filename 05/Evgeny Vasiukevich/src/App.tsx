import { ThemeProvider } from 'styled-components';
import HomePage from './components/HomePage/HomePage';
import HotelsBlock from './components/Hotels/HotelsBlock';
import GuestsRoomsCounter from './components/UI/GuestsRoomsCounter/GuestsRoomsCounter';
import { SearchContextProvider } from './context/SearchContextProvider';
import GlobalStyles from './styles/global';
import { baseTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <SearchContextProvider>
        <HomePage />
        <HotelsBlock />
      </SearchContextProvider>
    </ThemeProvider>    
  );
}

export default App;