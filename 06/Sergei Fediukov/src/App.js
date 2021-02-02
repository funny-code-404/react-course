import DataList from './components/DataList';
import Preloader from './components/Preloader';
import './App.css';
import { Box } from '@material-ui/core';


function App() {
  return (
    <Box
      display='flex'
      maxWidth='1170px'
      minWidth='950px'
      margin='0 auto'
      border='1px solid black'
    >
      <Preloader />
      <DataList />
    </Box >
  );
}

export default App;
