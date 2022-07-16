import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeEnum } from './interfaces/styled';
import HotelPage from './pages/HotelPage';
import StaysPage from './pages/StaysPage';
import { themeSelector } from './redux/theme/selectors';
import GlobalStyles from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const theme = useSelector(themeSelector);
  const isLightTheme = theme === ThemeEnum.LIGHT ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={isLightTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/hotels' element={<StaysPage />} />
          <Route path='/hotels/:id' element={<HotelPage />} />
          <Route path='*' element={<Navigate replace to='/hotels' />} />
        </Routes>
      </Router>
    </ThemeProvider>    
  );
}

export default App;