import React from 'react'
import '../signUp/SignUp.css'
import {useForm} from "react-hook-form";
import SubmitButton from "../../components/submitButton/SubmitButton";

function ContactForm(){
    const { handleSubmit, register } = useForm()

    function onFormSubmit(data) {
        console.log(data)
    }
    return <main className="signup-wrapper">
    <form onSubmit={handleSubmit(onFormSubmit)} className="form">
    <h2>Contactformulier</h2>
        <label htmlFor="details-name">
            Naam:
            <input
            type="text"
            name="name"
            id="details-name"
            className="input"
            {...register("username")} required
            />
        </label>
        <label htmlFor="details-email">
            Emailadres:
            <input
                type="text"
                name="email"
                id="details-email"
                className="input"
                {...register("email")} required
            />
        </label>
        <label htmlFor="details-message">
            Uw bericht:
            <textarea
                type="text"
                name="text-area"
                rows="4"
                cols="35"
                id="details-message"
                className="input"
                {...register("message")} required
            />
        </label>
        <SubmitButton
        buttonText="Versturen"
        />

    </form>
    </main>
}
export default ContactForm