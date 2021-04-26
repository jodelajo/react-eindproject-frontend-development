import React, {useRef, useState} from 'react'
import {useForm} from "react-hook-form"
import './SignUp.css'
import {useAuth} from '../../context/AuthContext'
import {Link, useHistory } from 'react-router-dom'


function SignUp() {
    const {handleSubmit } = useForm()
    const emailRef = useRef()
    const userNameRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup, currentUser} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    console.log(currentUser)

    async function onSubmit() {
        if (passwordRef.current.value !==
            passwordConfirmRef.current.value) {
            return setError('passwords do not match')
        }
        try {
            setError('')
            setLoading(true)
            const result = await signup(emailRef.current.value, passwordRef.current.value, userNameRef.current.value)
            console.log(result)
            history.push("/dashboard")
        } catch {
            setError('Failed to create account')
        }
        setLoading(false)
    }

    return <main>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {error && <p> {error} </p>}
            <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                ref={userNameRef} required
                className="input"
            />
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                ref={emailRef} required
                className="input"
            />
            <input
                type="password"
                name="password"
                id="password-field"
                ref={passwordRef} required
                placeholder="Password"
                className="input"
            />
            <input
                type="password"
                name="password-confirmation"
                id="confirmation-field"
                placeholder="Password confirmation"
                ref={passwordConfirmRef} required
                className="input"
            />
            <button type="submit" className="submit-button" disabled={loading}>Maak een account aan</button>

        </form>

        <p>Heb je al een <Link to="/log-in">account</Link>?</p>
    </main>
}

export default SignUp