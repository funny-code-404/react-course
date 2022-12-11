import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext/AuthContext';
import AuthPage from '../pages/AuthPage';
import HotelPage from '../pages/HotelPage';
import StaysPage from '../pages/StaysPage';
import ProtectedAuth from './ProtectedAuth';
import RequireAuth from './RequireAuth';

const AppRouter = () => {
  const { value } = useContext(AuthContext);
  console.log(value);
  

  return (
    <Routes>
      <Route path='/signin' element={
        <RequireAuth isAuth={value.isAuth}>
          <AuthPage />
        </RequireAuth>
      } />
      <Route path='/hotels' element={
        <ProtectedAuth isAuth={value.isAuth}>
          <StaysPage />
        </ProtectedAuth>
      } />
      <Route path='/hotels/:id' element={
        <ProtectedAuth isAuth={value.isAuth}>
          <HotelPage />
        </ProtectedAuth>
      } />
      <Route path='*' element={
        <ProtectedAuth isAuth={value.isAuth}>
          <Navigate replace to='/hotels' />
        </ProtectedAuth>
      } />
    </Routes>
  );
};

export default AppRouter;