import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LocationContextProvider from "./context/LocationContext";
import {AuthContextProvider} from "./context/AuthContext";
import HotColdContextProvider from "./context/HotColdContext";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <HotColdContextProvider>
                    <LocationContextProvider>
                        <App/>
                    </LocationContextProvider>
                </HotColdContextProvider>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
