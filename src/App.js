import './App.css';
import React, { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { Route, BrowserRouter, Routes, Navigate, } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import { checkUserSession} from './redux/User/user.actions';
import { useDispatch} from 'react-redux';
import Dashboard from './pages/Dashboard';
import WithAuth from './hoc/withAuth';
import Admin from './pages/Admin';
import WithAdminAuth from './hoc/withAdminAuth';
import AdminToolbar from './components/AdminToolbar';
import Payment from './pages/Payment';

const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <ToastContainer>
        </ToastContainer>
        <NavBar />
        <AdminToolbar/>
        <Routes>
          <Route path='/cart' exact element={<Cart />}  />
          <Route path='/' exact element={<Home />}  />
          <Route path="/" element={<Navigate to="not-found" />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="not-found" />} />
          <Route path='/registration' exact element={<Registration />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/recovery' exact element={<Recovery />} />  
          <Route path='/dashboard' element={<WithAuth><Dashboard /></WithAuth>} />
          <Route path='/admin' element={ <WithAdminAuth><Admin/></WithAdminAuth>} />
          <Route path='/payment' exact element={<Payment />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
