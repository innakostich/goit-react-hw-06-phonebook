
import React from 'react';
import ReactDOM from 'react-dom/client';
import  Redux  from 'react-redux';
import { store } from 'redux/store';
import App from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Redux.Provider store={store}>
      <App />
    </Redux.Provider>
  </React.StrictMode>
);


    
 