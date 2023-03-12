import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { store } from './feauters/store';
import store from './feauters/store';
import { Provider } from 'react-redux';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


// const firebaseConfig = {
//   apiKey: "AIzaSyAKL5e0hTKoIRHMSGh7aFS09CWZneNt5sA",
//   authDomain: "my-wishlist-cc7be.firebaseapp.com",
//   projectId: "my-wishlist-cc7be",
//   storageBucket: "my-wishlist-cc7be.appspot.com",
//   messagingSenderId: "1062139193344",
//   appId: "1:1062139193344:web:7bf6b1e2df491e7192d0e5",
//   measurementId: "G-DPJSJZ4NHV"
// };
// const app = initializeApp(firebaseConfig);
// console.log(app)
// const analytics = getAnalytics(app);
// import createStore from './redux/User/createStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const mongoose = require("mongoose")
// require('dotenv').config()
// mongoose.connect()
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

