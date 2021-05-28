import React, {useState} from 'react';
import '../signUp/SignUp.css';
import {useAuth} from '../../context/AuthContext';
import {Link, useHistory} from 'react-router-dom';
import SubmitButton from "../../components/submitButton/SubmitButton";

function Profile() {
    const [error, setError] = useState('')
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
        <div>
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