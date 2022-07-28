import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AuthContextProvider from './context/AuthContext/AuthContextProvider';
import { ThemeEnum } from './interfaces/styled';
import { themeSelector } from './redux/theme/selectors';
import AppRouter from './router/AppRouter';
import GlobalStyles from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const theme = useSelector(themeSelector);
  const isLightTheme = theme === ThemeEnum.LIGHT ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={isLightTheme}>
      <GlobalStyles />
      <AuthContextProvider>
        <Router>
          <AppRouter />
        </Router>
      </AuthContextProvider>
    </ThemeProvider>    
  );
}

export default App;