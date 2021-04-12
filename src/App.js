import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import './App.css';
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import Friesland from "./pages/friesland/Friesland";
import HeroButton from "./components/heroButton/HeroButton";
import Footer from "./components/footer/Footer";
import Wadden from "./pages/wadden/Wadden";
import NoordWest from "./pages/noordwest/NoordWest";
import NoordOost from "./pages/noordoost/NoordOost";
import ZuidWest from "./pages/zuidwest/ZuidWest";
import ZuidOost from "./pages/zuidoost/ZuidOost";

import Location from "./pages/location/Location";

function App() {
    return (
        <Router>
            <div className="weather-container">

                {/*HEADER -------------------- */}
                <div className="weather-header">
                    <NavBar/>

                    <span className="location-details">
                <Switch>
                    <Route exact path="/">
                       <Home/>
                   </Route>
                    <Route path="/friesland">
                         <Friesland/>
                  </Route>
                    <Route path="/wadden">
                         <Wadden />
                  </Route>
                    <Route exact path="/noordwest">
                         <NoordWest />
                  </Route>
                      <Route exact path="/noordoost">
                         <NoordOost />
                  </Route>
                    <Route exact path="/zuidwest">
                         <ZuidWest />
                  </Route>
                     <Route exact path="/zuidoost">
                         <ZuidOost />
                  </Route>
                    <Route  path="/location">
                         <Location />
                    </Route>
             </Switch>
          </span>
                </div>

                {/*CONTENT ------------------ */}
                <div className="weather-content">
                    {/*<TabBarMenu/>*/}

                    <div className="tab-wrapper">
                        <HeroButton/>
                        <HeroButton/>
                    </div>
                    <div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
