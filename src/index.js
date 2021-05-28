import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LocationContextProvider from "./context/LocationContext";
import {AuthContextProvider} from "./context/AuthContext";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <LocationContextProvider>
                    <App/>
                </LocationContextProvider>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
