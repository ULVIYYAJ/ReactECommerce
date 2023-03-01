import './App.css';
import "react-toastify/dist/ReactToastify.css";
// import Gallery from './components/Gallery/Gallery';
// import Wishlist from './components/Gallery/Gallery';
// import Wishlist from './feauters/Wishlist/Wishlist';
// import Cart from './feauters/Cart/Cart';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <ToastContainer>
      </ToastContainer>
        <NavBar />
        <Routes>
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/' exact element={<Home />} />
          <Route path="/" element={<Navigate to="not-found" />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



