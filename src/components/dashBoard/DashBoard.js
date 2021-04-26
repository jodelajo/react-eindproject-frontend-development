import React, { useState } from 'react'
import '../../pages/signUp/SignUp.css'
import { useAuth } from '../../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'

function DashBoard() {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
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
        <div className='auth-wrapper'>
            <h2>Profiel</h2>
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
        <div>
            <button
                type="button"
                className="submit-button"
                onClick={handleLogout}>
                Uitloggen
            </button>
        </div>
    </>
}

export default DashBoard