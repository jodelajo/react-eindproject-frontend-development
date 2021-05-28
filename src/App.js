import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import Friesland from './pages/friesland/Friesland';
import Footer from './components/footer/Footer';
import Wadden from './pages/wadden/Wadden';
import NoordWest from './pages/noordwest/NoordWest';
import NoordOost from './pages/noordoost/NoordOost';
import ZuidWest from './pages/zuidwest/ZuidWest';
import ZuidOost from './pages/zuidoost/ZuidOost';
import SignUp from './pages/signUp/SignUp';
import LogIn from './pages/logIn/LogIn';
import Profile from './pages/profile/Profile';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import UpdateProfile from './pages/updateProfile/UpdateProfile';
import Location from './pages/location/Location';
import Region from "./components/region/Region";
import Header from "./components/header/Header";
import ContactForm from "./pages/contactForm/ContactForm";

function App() {
    return (
        <>

            <div className="weather-container">
                <NavBar/>
                <Header/>
                <div className="weather-wrapper">

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <PrivateRoute path="/friesland" component={Friesland}/>
                        <PrivateRoute path="/wadden" component={Wadden}/>
                        <PrivateRoute exact path="/noordwest" component={NoordWest}/>
                        <PrivateRoute exact path="/noordoost" component={NoordOost}/>
                        <PrivateRoute exact path="/zuidwest" component={ZuidWest}/>
                        <PrivateRoute exact path="/zuidoost" component={ZuidOost}/>
                        <PrivateRoute path="/location/:slug" component={Location}/>
                        <PrivateRoute path="/region" component={Region}/>
                        <PrivateRoute path="/profile" component={Profile}/>
                        <Route path="/forgot-password" component={ForgotPassword}/>
                        <PrivateRoute path="/update-profile" component={UpdateProfile}/>
                        <Route path="/contact" component={ContactForm}/>
                        <Route path="/sign-up" component={SignUp}/>
                        <Route path="/log-in" component={LogIn}/>
                    </Switch>

                </div>
                <Footer/>
            </div>
        </>
    )
}

export default App;
