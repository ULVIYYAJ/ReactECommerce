import './App.css';
import React, { useState, useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { Route, BrowserRouter, Routes, Navigate, } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Registration from './pages/Registration';
import Login from './pages/Login';
import { auth, handleUserProfile } from './firebase/utils';
import Recovery from './pages/Recovery';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
    return authListener;
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <ToastContainer>
        </ToastContainer>
        <NavBar currentUser={currentUser} />
        <Routes>
          <Route path='/cart' exact element={<Cart />} currentUser={currentUser} />
          <Route path='/' exact element={<Home />} currentUser={currentUser} />
          <Route path="/" element={<Navigate to="not-found" />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="not-found" />} />
          <Route path='/registration' exact element={currentUser ? <Navigate to='/' /> : <Registration />} />
          <Route path='/login' element={currentUser ? <Navigate to='/' /> : <Login currentUser={currentUser} />} />
          <Route path='/recovery' exact element={<Recovery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;



