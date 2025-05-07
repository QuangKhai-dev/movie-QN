import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//sass
import './sass/index.scss';

//RTK
import { Provider } from 'react-redux';
import { store } from './redux/store';

//slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

