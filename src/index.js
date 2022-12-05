import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyABH7LOPHG8-cBg-q3a_12kYvDXho9co18",
    authDomain: "cart-9e89f.firebaseapp.com",
    projectId: "cart-9e89f",
    storageBucket: "cart-9e89f.appspot.com",
    messagingSenderId: "618630254461",
    appId: "1:618630254461:web:5e64b56909d4961a8d0614"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

