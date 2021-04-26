import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import Friesland from './pages/friesland/Friesland'
import Footer from './components/footer/Footer'
import Wadden from './pages/wadden/Wadden'
import NoordWest from './pages/noordwest/NoordWest'
import NoordOost from './pages/noordoost/NoordOost'
import ZuidWest from './pages/zuidwest/ZuidWest'
import ZuidOost from './pages/zuidoost/ZuidOost'
import SignUp from './pages/signUp/SignUp'
import LogIn from './pages/logIn/LogIn'
import DashBoard from './components/dashBoard/DashBoard'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import UpdateProfile from './pages/updateProfile/UpdateProfile'

function App() {
    return (
        <>
            <div className="weather-container">
                <div className="weather-header">
                    <NavBar/>

                    <span className="location-details">
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <PrivateRoute path="/friesland" component={Friesland}/>
                                <PrivateRoute path="/wadden" component={Wadden}/>
                                <PrivateRoute exact path="/noordwest" component={NoordWest}/>
                                <PrivateRoute exact path="/noordoost" component={NoordOost}/>
                                <PrivateRoute exact path="/zuidwest" component={ZuidWest}/>
                                <PrivateRoute exact path="/zuidoost" component={ZuidOost}/>
                                <Route path="/sign-up" component={SignUp}/>
                                <Route path="/log-in" component={LogIn}/>
                                <PrivateRoute path="/dashboard" component={DashBoard}/>
                                <Route path="/forgot-password" component={ForgotPassword}/>
                                <PrivateRoute path="/update-profile" component={UpdateProfile}/>
                         </Switch>
                        </span>
                </div>
                <div>
                    <div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App;
