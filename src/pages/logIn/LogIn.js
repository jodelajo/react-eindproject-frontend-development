import React, {createRef, useContext, useRef, useState} from 'react';
import {useForm} from "react-hook-form";
import '../signUp/SignUp.css'
import {useAuth, } from '../../context/AuthContext'
import { Link} from 'react-router-dom';


function LogIn() {
    const { handleSubmit, register } = useForm();
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    console.log(currentUser)

    async function onSubmit() {
        // e.preventDefault()

        try {
            setError('')
            setLoading(true)
            const result = await signup(emailRef.current.value, passwordRef.current.value)
            console.log(result)
        } catch {
            setError('Failed to create account')
        }
        setLoading(false)
    }

    return <main>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {error && <p> {error} </p>}
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                ref={emailRef}
                {...register("email")}
                className="input"
            />
            <input
                type="password"
                name="password"
                id="password-field"
                {...register("password")}
                ref={passwordRef}
                placeholder="Password"
                className="input"
            />
            <button type="submit" className="submit-button" disabled={loading}>Log in</button>

        </form>
        <p>Nog geen account? <Link to="/sign-up">Klik hier</Link></p>
    </main>
}

export default LogIn