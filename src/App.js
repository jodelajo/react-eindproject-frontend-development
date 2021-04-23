import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import Friesland from "./pages/friesland/Friesland";
import Footer from "./components/footer/Footer";
import Wadden from "./pages/wadden/Wadden";
import NoordWest from "./pages/noordwest/NoordWest";
import NoordOost from "./pages/noordoost/NoordOost";
import ZuidWest from "./pages/zuidwest/ZuidWest";
import ZuidOost from "./pages/zuidoost/ZuidOost";
import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/signIn/SignIn";



function App() {
    return (
        <>
        <div className="weather-container">
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
                                     <Wadden/>
                              </Route>
                                <Route exact path="/noordwest">
                                     <NoordWest/>
                              </Route>
                                  <Route exact path="/noordoost">
                                     <NoordOost/>
                              </Route>
                                <Route exact path="/zuidwest">
                                     <ZuidWest/>
                              </Route>
                                 <Route exact path="/zuidoost">
                                     <ZuidOost/>
                              </Route>
                                 <Route exact path="/sign-up">
                                     <SignUp/>
                              </Route>
                                <Route exact path="/sign-in">
                                     <SignIn/>
                              </Route>
                         </Switch>
                        </span>
                    </div>
                    <div>
                        <div className="auth">
                            <Link to="/sign-up" className="auth-link-active">Sign Up
                            </Link>
                            <Link to="/sign-in" className="auth-link">Sign In
                            </Link>

                        </div>
                        <div>
                            <Footer/>
                        </div>
                    </div>
                </div>
        </>
)
};

export default App;
