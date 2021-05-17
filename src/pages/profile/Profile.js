import React, {useState} from 'react'
import '../signUp/SignUp.css'
import {useAuth} from '../../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import SubmitButton from "../../components/submitButton/SubmitButton";

function Profile() {
    const [error, setError] = useState('')
    // const [radio, setRadio] = useState("geen")
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

    return <main className="form">
        <div >
            <h2>Profiel</h2>
            <div>
                {error && <p> {error} </p>}
                <p><strong>Username: </strong>
                    {currentUser && currentUser.displayName}
                </p>
                <p><strong>Email: </strong>
                    {currentUser && currentUser.email}
                </p>
                <Link to="/update-profile">
                    Profiel aanpassen
                </Link>

            </div>
        </div>
        {/*<div className="boosterMobile-wrapper">*/}
        {/*    <h4>Turbo BoosterWeb</h4>*/}
        {/*    <p>Kies je BoosterWeb! Geef dubbele punten aan:</p>*/}
        {/*    <div className="boosterMobile-content">*/}
        {/*        <h4>Radiobutton is: {radio}</h4>*/}
        {/*        <div className="radio-buttons">*/}
        {/*            <label*/}
        {/*                htmlFor="geen"*/}
        {/*                className="label-boosterMobile">*/}
        {/*                Geen boosterMobile*/}
        {/*                <input*/}
        {/*                    className="radio-button"*/}
        {/*                    type="radio"*/}
        {/*                    id="geen"*/}
        {/*                    name="boosterMobile"*/}
        {/*                    value="geen"*/}
        {/*                    checked={radio ==="geen"}*/}
        {/*                    onChange={(e)=>{ setRadio(e.target.value)}}*/}
        {/*                />*/}
        {/*            </label>*/}
        {/*            <label*/}
        {/*                htmlFor="clouds"*/}
        {/*                className="label-boosterMobile">*/}
        {/*                Wolken*/}
        {/*                <input*/}
        {/*                    className="radio-button"*/}
        {/*                    type="radio"*/}
        {/*                    id="clouds"*/}
        {/*                    name="boosterMobile"*/}
        {/*                    value="clouds"*/}
        {/*                    checked={radio ==="clouds"}*/}
        {/*                    onChange={(e)=>{ setRadio(e.target.value)}}*/}
        {/*                />*/}
        {/*            </label>*/}
        {/*            <label htmlFor="wind"*/}
        {/*                   className="label-boosterMobile">*/}
        {/*                Wind*/}
        {/*                <input*/}
        {/*                    className="radio-button"*/}
        {/*                    type="radio"*/}
        {/*                    id="wind"*/}
        {/*                    name="boosterMobile"*/}
        {/*                    value="wind"*/}
        {/*                    checked={radio ==="wind"}*/}
        {/*                    onChange={(e)=>{ setRadio(e.target.value)}}*/}
        {/*                />*/}
        {/*            </label>*/}
        {/*            <label htmlFor="temp"*/}
        {/*                   className="label-boosterMobile">*/}
        {/*                Temperatuur*/}
        {/*                <input*/}
        {/*                    className="radio-button"*/}
        {/*                    type="radio"*/}
        {/*                    id="temp"*/}
        {/*                    name="boosterMobile"*/}
        {/*                    value="temp"*/}
        {/*                    checked={radio ==="temp"}*/}
        {/*                    onChange={(e)=>{ setRadio(e.target.value)}}*/}
        {/*                />*/}
        {/*            </label>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}


                <div>
            <SubmitButton
                className="submit-button-profile"
                buttonText="Uitloggen"
                onClick={handleLogout}
            />

        </div>
    </main>
}

export default Profile