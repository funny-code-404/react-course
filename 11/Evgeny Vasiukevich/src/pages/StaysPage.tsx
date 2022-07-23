import HomePage from '../components/HomePage/HomePage';
import HotelsBlock from '../components/Hotels/HotelsBlock';
import Offers from '../components/Offers/Offers';
import RefsContextProvider from '../context/RefsContextProvider';

function StaysPage() {
  return (
    <RefsContextProvider>
      <HomePage />
      <Offers />
      <HotelsBlock />
    </RefsContextProvider>
  );
}

export default StaysPage;