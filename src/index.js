import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app'
import './index.scss';
import Initial from './pages/Initial';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './context/CartContext';

const firebaseConfig = {
  apiKey: "AIzaSyBPsQvc6MuBaYVR4Du6Q_r4mG0ReRG6Ebw",
  authDomain: "gamestore-4abad.firebaseapp.com",
  projectId: "gamestore-4abad",
  storageBucket: "gamestore-4abad.appspot.com",
  messagingSenderId: "794090665807",
  appId: "1:794090665807:web:30205d6ee77bf58aa4f73a",
  measurementId: "G-7L4HWWVS4L"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <Initial />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
