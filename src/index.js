import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';

axios.defaults.headers = { Accept: 'application/json' };
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});
export default axiosInstance;

const widgetDivs = document.querySelectorAll('.nicoraynaud-finance-widget');

widgetDivs.forEach(div => {
    ReactDOM.render(
        <React.StrictMode>
            <App symbol={div.dataset.symbol} />
        </React.StrictMode>,
        div
    );
});

