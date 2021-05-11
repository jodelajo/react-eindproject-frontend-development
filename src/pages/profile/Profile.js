import React, {useState} from 'react'
import '../signUp/SignUp.css'
import {useAuth} from '../../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import '../signUp/SignUp.css'
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

    return <main className="signup-wrapper">
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
                    Update profiel
                </Link>

            </div>
        </div>

        <div>
            <SubmitButton
                buttonText="Uitloggen"
                onClick={handleLogout}
            />

        </div>
    </main>
}

export default Profile