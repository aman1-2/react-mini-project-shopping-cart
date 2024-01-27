import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "./Redux/Store";
import { Toaster } from 'react-hot-toast';

/*Here we have wrapped our app with the provider so that every component of app can use the
functionality of redux.*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
            <Toaster></Toaster>
        </Provider>
    </BrowserRouter>
);

