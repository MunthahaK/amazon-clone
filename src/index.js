import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebaseConfig from './firebase.config';
import "slick-carousel/slick/slick.css";
import { PersistGate } from 'redux-persist/integration/react'
import { store,persistor } from './redux/store';
import { Provider } from 'react-redux';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}> 
   <PersistGate loading={"loading"} persistor={persistor}>
   <App/>
   </PersistGate>
   </Provider>
  </React.StrictMode>
);

