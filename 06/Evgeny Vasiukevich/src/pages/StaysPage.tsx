import HomePage from '../components/HomePage/HomePage';
import HotelsBlock from '../components/Hotels/HotelsBlock';
import { SearchContextProvider } from '../context/SearchContext/SearchContextProvider';

function StaysPage() {
  return (
    <SearchContextProvider>
      <HomePage />
      <HotelsBlock />
    </SearchContextProvider>
  );
}

export default StaysPage;