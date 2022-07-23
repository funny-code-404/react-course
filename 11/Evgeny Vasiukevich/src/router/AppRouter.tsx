import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { auth } from '../firebase';
import AuthPage from '../pages/AuthPage';
import HotelPage from '../pages/HotelPage';
import StaysPage from '../pages/StaysPage';

const AppRouter = () => {
    const [isAuth, setIsAuth] = useState(true);
    
    useEffect(() => {
      auth.onAuthStateChanged(user => setIsAuth(!user));
    }, []);

    return (
      isAuth ?
        <Routes>
          <Route path='/signin' element={<AuthPage />} />
          <Route path='*' element={<Navigate replace to='/signin' />} />
        </Routes>
      :
        <Routes>
          <Route path='/hotels' element={<StaysPage />} />
          <Route path='/hotels/:id' element={<HotelPage />} />
          <Route path='*' element={<Navigate replace to='/hotels' />} />
        </Routes>
    );
};

export default AppRouter;