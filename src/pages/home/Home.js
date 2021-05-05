import React from 'react'
import './Home.css'
import {useAuth} from '../../context/AuthContext'
import {ReactComponent as Terrace} from '../../assets/images/terrace-svgrepo-com.svg';
import SignUpLogInLink from "../../components/signUpLogInLink/SignUpLogInLink";
import Map from "../../components/map/Map";
import Friesland from "../friesland/Friesland";


function Home() {
    const {currentUser} = useAuth()

    return <div className="home">
        <h2 className="home-title">It beste plakje fan Fryslân</h2>


        <div className="home-wrapper">
            {!currentUser ?
                <div className="pop-up">
                    <div className="welkom">
                        <h3 className="welkom-text">Welkom</h3>
                        <p className="intro">Vind het terras met het beste weer van Friesland!</p>
                        <p className="intro-2">Maak snel een account aan!</p>
                        <Terrace className="icon-terrace"/>
                    </div>
                </div>
                :
                <Map/>
            }
        </div>
        {!currentUser && <div className="signup">
            <SignUpLogInLink/>
        </div>}

        {/*<div className="web-home">*/}
        {/*    <div className="web-left">*/}
        {/*        <Friesland/>*/}
        {/*    </div>*/}
        {/*    <div className="web-right">*/}
        {/*        <Map/>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>
}

export default Home