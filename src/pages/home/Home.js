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
import MoreInfo from "../../components/moreInfo/MoreInfo";
import UseMediaQuery from "../../components/useMediaQuery/UseMediaQuery";

function Home() {

    const {currentUser} = useAuth()
    const isActive = UseMediaQuery('(min-width: 767px)')


    return <div className="home">
        <h2 className="home-title">It bêste plakje fan Fryslân</h2>

        {!isActive ? <div className="home-wrapper">
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
                    <div className="map-home">
                    <Map/>
                    </div>
                }
                {!currentUser && <div className="signup">
                    <SignUpLogInLink/>
                </div>}
                {currentUser && <div className="info-button">
                    <MoreInfo/>
                </div>}
            </div>
            :
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
        }
    </div>
};

export default Home