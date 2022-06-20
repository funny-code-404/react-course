import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import HotelPage from './pages/HotelPage';
import StaysPage from './pages/StaysPage';
import GlobalStyles from './styles/global';
import { baseTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
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