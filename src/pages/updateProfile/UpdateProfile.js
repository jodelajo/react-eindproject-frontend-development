import React, {useRef, useState} from 'react'
import {useForm} from 'react-hook-form'
import '../signUp/SignUp.css'
import {useAuth} from '../../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import SubmitButton from "../../components/submitButton/SubmitButton";


function UpdateProfile() {
    const {handleSubmit} = useForm();
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {currentUser, updatePassword, updateEmail} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    console.log(currentUser)

    function onSubmit() {
        if (passwordRef.current.value !==
            passwordConfirmRef.current.value) {
            return setError('passwords do not match')
        }

        const promises = []
        setLoading(true)
        setError('')

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push("/profile")
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })
    }


        return <main>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                {error && <p> {error} </p>}
                <h2>Annpassen Profiel</h2>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    ref={emailRef} required
                    className="input"
                    defaultValue={currentUser.email}
                />
                <input
                    type="password"
                    name="password"
                    id="password-field"
                    ref={passwordRef}
                    placeholder="Leave blank to keep the same"
                    className="input"
                />
                <input
                    type="password"
                    name="password-confirmation"
                    id="confirmation-field"
                    placeholder="Leave blank to keep the same"
                    ref={passwordConfirmRef}
                    className="input"
                />
                <SubmitButton
                disabled={loading}
                buttonText="Aanpassen"
                />
            </form>

            <p><Link to="/profile">Annuleren</Link></p>
        </main>
    }

    export default UpdateProfile