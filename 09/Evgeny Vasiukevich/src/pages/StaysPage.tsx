import HomePage from '../components/HomePage/HomePage';
import HotelsBlock from '../components/Hotels/HotelsBlock';
import RefsContextProvider from '../context/RefsContextProvider';

function StaysPage() {
  return (
    <RefsContextProvider>
      <HomePage />
      <HotelsBlock />
    </RefsContextProvider>
  );
}

export default StaysPage;