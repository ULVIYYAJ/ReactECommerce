import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

// NAVBAR
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { auth } from "../firebase/utils";
// import { connect } from "react-redux";

// const NavBar = props => {
//     const { currentUser } = props;
//     const { cartTotalQuantity } = useSelector(state => state.cart)

//     return (<nav className="nav-bar">
//         <Link to='/'><h2>OnlineShop</h2></Link>
//         <Link to='/cart'>
//             {/* <h2>My account</h2> */}
//             <div className="nav-bag">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-handbag-fill" viewBox="0 0 16 16">
//                     <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
//                 </svg>
//                 <span className="bag-quantity">
//                     <span>{cartTotalQuantity}</span>
//                 </span>
//             </div>
//         </Link>
//         <div className="callToAction">
//             {currentUser && (
//                 <ul>
//                     <li className="login">
//                         <Link to='/dashboard'>
//                             Dashboard
//                         </Link>
//                     </li>
//                     <li>
//                         <span className="logout" onClick={() => auth.signOut()}>
//                             LogOut
//                         </span>
//                     </li>
//                 </ul>
//             )}
//             {!currentUser && (
//                 <ul>
//                     <li className="login">
//                         <Link to='/dashboard'>
//                             Dashboard
//                         </Link>
//                     </li>
//                     <li className="login">
//                         <Link to='/registration'>
//                             Register
//                         </Link>
//                     </li>
//                     <li className="login">
//                         <Link to='/login'>
//                             Login
//                         </Link>
//                     </li>
//                 </ul>
//             )}
//         </div>
//     </nav>
//     );
// }
// NavBar.defaultProps = {
//     currentUser: null
// }
// const mapStateToProps = ({user}) =>({
//     currentUser: user ? user.currentUser : null
// });
// export default connect(mapStateToProps, null)(NavBar);

// CUSTOMHOOKS-index.JS
// import useAuth from "./useAuth";
// export {
//     useAuth
// };

// CUSTOMHOOKS - USEAUTH.JS
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import WithAuth from '../hoc/withAuth';

// const mapState = ({ user }) => ({
//   currentUser: user.currentUser
// });

// const useAuth = props => {
//   const { currentUser } = useSelector(mapState);
// //   const navigate = useNavigate();

//   useEffect(() => {
//     if (!currentUser) {
//     //   navigate('/login');
//     props.history.push('/login')
//     }
//   }, [currentUser]);

//   return currentUser;
// };

// export default useAuth;

// STORE.JS
// import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger';
// import wishlistReducer from './WishlistSlice/wishlistSlice';
// import cartReducer, { getTotals } from '../feauters/cartSlice';

// const store = configureStore({
//   reducer: {
//     gallery: wishlistReducer,
//     cart: cartReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// });

// store.dispatch(getTotals());

// export default store;

// HOC - WITHAUTH.JS
// import { useAuth } from "../customHooks";
// import { useNavigate } from 'react-router-dom';

// const WithAuth = props => {
//   const navigate = useNavigate();
//   const isAuthenticated = useAuth(props);

//   if (isAuthenticated) {
//     return props.children;
//   } else {
//     navigate('/login');
//     return null;
//   }
// }

// export default WithAuth;

// REDUX - USER - USERACTION.JS
// import userTypes from "./user.types";
// export const setCurrentUser = user =>({
//     type: userTypes.SET_CURRENT_USER,
//     payload: user
// });

// REDUX - USER - USERREDUCER.JS
// import userTypes from "./user.types";

// const INITIAL_STATE = {
//     currentUser: null
// };
// const userReducer = (state=INITIAL_STATE, action) =>{
//     switch(action.type){
//         case userTypes.SET_CURRENT_USER:
//             return{
//                 ...state,
//                 currentUser:action.payload
//             }
//         default:
//             return state;
//     }
// };
// export default userReducer;

// REDUX - USER - USERTYPES.JS
// const userTypes = {
//     SET_CURRENT_USER:'SET_CURRENT_USER'
// };
// export default userTypes;


// APP.JS
// import './App.css';
// import React, { useEffect } from 'react';
// import "react-toastify/dist/ReactToastify.css";
// import { Route, BrowserRouter, Routes, Navigate, } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import NavBar from './components/NavBar';
// import Cart from './components/Cart';
// import Home from './components/Home';
// import NotFound from './components/NotFound';
// import Registration from './pages/Registration';
// import Login from './pages/Login';
// import { auth, handleUserProfile } from './firebase/utils';
// import Recovery from './pages/Recovery';
// import { setCurrentUser } from './redux/User/user.actions';
// import { connect } from 'react-redux';
// // import Dashboard from './pages/Dashboard';
// // import WithAuth from './hoc/withAuth';

// const App = props => {
//   const {setCurrentUser, currentUser} = props;

//   useEffect(() => {
//     const authListener = auth.onAuthStateChanged(async userAuth => {
//       if (userAuth) {
//         const userRef = await handleUserProfile(userAuth);
//         userRef.onSnapshot(snapshot => {
//           setCurrentUser({
//             id: snapshot.id,
//             ...snapshot.data()
//           });
//         });
//       }
//         setCurrentUser(userAuth);
//     });
//     return ()=>{
//       authListener();
//     };
//   }, []);

//   return (
//     <div className='App'>
//       <BrowserRouter>
//         <ToastContainer>
//         </ToastContainer>
//         <NavBar currentUser={currentUser} />
//         <Routes>
//           <Route path='/cart' exact element={<Cart />}  />
//           <Route path='/' exact element={<Home />}  />
//           <Route path="/" element={<Navigate to="not-found" />} />
//           <Route path="not-found" element={<NotFound />} />
//           <Route path="*" element={<Navigate to="not-found" />} />
//           <Route path='/registration' exact element={currentUser ? <Navigate to='/' /> : <Registration />} />
//           <Route path='/login' element={currentUser ? <Navigate to='/' /> : <Login currentUser={currentUser} />} />
//           <Route path='/recovery' exact element={<Recovery />} />  
//           {/* <Route path='/dashboard' exact element={<WithAuth><Dashboard /></WithAuth>} /> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// const mapStateToProps = ({user}) =>{
//   if (user) {
//     return {
//       currentUser: user.currentUser
//     }
//   } else {
//     return {
//       currentUser: null
//     }
//   }
// };

// const mapDispatchToProps = dispatch =>({
//   setCurrentUser:user=>dispatch(setCurrentUser(user))
// })


// export default connect(mapStateToProps, mapDispatchToProps)(App);