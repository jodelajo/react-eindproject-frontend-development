import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import './App.css';
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import Friesland from "./pages/friesland/Friesland";
import HeroButton from "./components/heroButton/HeroButton";

function App() {
  return (
      <>
        <div className="weather-container">

          {/*HEADER -------------------- */}
          <div className="weather-header">
            <NavBar/>


            <span className="location-details">
             <Home />
          </span>
          </div>

          {/*CONTENT ------------------ */}
          <div className="weather-content">
            {/*<TabBarMenu/>*/}

            <div className="tab-wrapper">
              <HeroButton />
              <HeroButton />
            </div>
          </div>
        </div>
      </>
  );
}

export default App;
