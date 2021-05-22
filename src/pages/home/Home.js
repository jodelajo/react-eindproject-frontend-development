import React from 'react'
import './Home.css'
import {useAuth} from '../../context/AuthContext'
import {ReactComponent as Terrace} from '../../assets/images/terrace-svgrepo-com.svg';
import SignUpLogInLink from "../../components/signUpLogInLink/SignUpLogInLink";
import Map from "../../components/map/Map";
import LittleFooter from "../../components/littleFooter/LittleFooter";
import mapExample from '../../assets/images/app_example_transp.png'
import {Link} from "react-router-dom";
import Text from "../../components/text/Text";
import {RiStarLine} from "react-icons/ri";

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
            {!currentUser && <div className="signup">
                <SignUpLogInLink/>
            </div>}
            {currentUser && <div className="hot-cold-button">
                <p>Klik op een regio of op de <span className="icon-star"><RiStarLine/> </span> voor het beste weer.
                    Klik dan op locatie voor informatie over terras. Of kies eerst een booster voor extra punten.</p>

            </div>}


        </div>

        <div className="web-home">
            <div className="web-left">
                {!currentUser ?
                    <div>
                        <Link to="/log-in">
                            <img src={mapExample} alt="map-example" className="map-example"/>
                        </Link>
                    </div>
                    :
                    <div>
                        <div className="map-web-left">
                            <Map/>
                        </div>
                        <div className="footer-web-left">
                            <LittleFooter/>
                        </div>
                    </div>}
            </div>
            <div className="web-right">
                <Text/>
            </div>
        </div>

    </div>
}

export default Home