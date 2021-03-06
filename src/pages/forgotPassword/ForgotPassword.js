import React, {useRef, useState} from 'react';
import {useForm} from "react-hook-form";
import '../signUp/SignUp.css';
import {useAuth} from '../../context/AuthContext';
import {Link} from 'react-router-dom';
import SubmitButton from "../../components/submitButton/SubmitButton";

function ForgotPassword() {
    const {handleSubmit} = useForm()
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function onSubmit() {
        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError('Failed to reset')
        }
        setLoading(false)
    }

    return <main>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {error && <p> {error} </p>}
            {message && <p>{message}</p>}
            <h2>Nieuw wachtwoord</h2>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                ref={emailRef} required
                className="input"
            />

            <SubmitButton
                disabled={loading}
                buttonText="aanvragen"
            />

        </form>
        <p><Link to="/log-in">Inloggen</Link>.</p>
        <p>Nog geen account? <Link to="/sign-up">Klik hier</Link>.</p>
    </main>
}

export default ForgotPassword