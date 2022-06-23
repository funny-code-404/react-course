import { useRef } from 'react';
import HomePage from '../components/HomePage/HomePage';
import HotelsBlock from '../components/Hotels/HotelsBlock';

function StaysPage() {
  const searchScrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <HomePage scrollRef={searchScrollRef} />
      <HotelsBlock scrollRef={searchScrollRef} />
    </>
  );
}

export default StaysPage;