import React, {useState} from 'react'
import '../signUp/SignUp.css'
import {useAuth} from '../../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import './Profile.css'
import SubmitButton from "../../components/submitButton/SubmitButton";

function Profile() {
    const [error, setError] = useState('')
    const [radio, setRadio] = useState("geen")
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/')
        } catch {
            setError('Failed to log out')
        }
    }

    return <>
        <div className='profile-wrapper'>
            <h2>Profiel</h2>
            <div className="profile-content">
                {error && <p> {error} </p>}
                <p><strong>Username: </strong>
                    {currentUser && currentUser.displayName}
                </p>
                <p><strong>Email: </strong>
                    {currentUser && currentUser.email}
                </p>
                <Link to="/update-profile">
                    Update profiel
                </Link>

            </div>
            <div className="booster-wrapper">
                <h4>Turbo Booster</h4>
                <p>Kies je Booster! Geef dubbele punten aan:</p>
                <div className="booster-content">
                    <h4>Radiobutton is: {radio}</h4>
                    <div className="radio-buttons">
                        <label
                            htmlFor="geen"
                            className="label-booster">
                            Geen booster
                            <input
                                className="radio-button"
                                type="radio"
                                id="geen"
                                name="booster"
                                value="geen"
                                checked={radio ==="geen"}
                                onChange={(e)=>{ setRadio(e.target.value)}}
                            />
                        </label>
                        <label
                            htmlFor="clouds"
                        className="label-booster">
                            Wolken
                            <input
                                className="radio-button"
                                type="radio"
                                id="clouds"
                                name="booster"
                                value="clouds"
                                checked={radio ==="clouds"}
                                onChange={(e)=>{ setRadio(e.target.value)}}
                            />
                        </label>
                        <label htmlFor="wind"
                               className="label-booster">
                            Wind
                            <input
                                className="radio-button"
                                type="radio"
                                id="wind"
                                name="booster"
                                value="wind"
                                checked={radio ==="wind"}
                                onChange={(e)=>{ setRadio(e.target.value)}}
                            />
                        </label>
                        <label htmlFor="temp"
                               className="label-booster">
                            Temperatuur
                            <input
                                className="radio-button"
                                type="radio"
                                id="temp"
                                name="booster"
                                value="temp"
                                checked={radio ==="temp"}
                                onChange={(e)=>{ setRadio(e.target.value)}}
                            />
                        </label>
                    </div>

                </div>
            </div>
        </div>

        <div>
            <SubmitButton
                buttonText="Uitloggen"
                onClick={handleLogout}
            />

        </div>
    </>
}

export default Profile