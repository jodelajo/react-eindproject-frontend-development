import React from 'react'
import './ContactForm.css'
import {useForm} from "react-hook-form";
import SubmitButton from "../../components/submitButton/SubmitButton";

function ContactForm(){
    const { handleSubmit, register } = useForm()

    function onFormSubmit(data) {
        console.log(data)
    }
    return <form onSubmit={handleSubmit(onFormSubmit)} className="contact-form">
    <h2>Contactformulier</h2>
        <label htmlFor="details-name">
            Naam:
            <input
            type="text"
            name="name"
            id="details-name"
            {...register("username")} required
            />
        </label>
        <label htmlFor="details-email">
            Emailadres:
            <input
                type="text"
                name="email"
                id="details-email"
                {...register("email")} required
            />
        </label>
        <label htmlFor="details-message">
            Uw bericht:
            <textarea
                type="text"
                name="text-area"
                rows="4"
                cols="40"
                id="details-message"
                {...register("message")} required
            />
        </label>
        <SubmitButton
        buttonText="Versturen"
        />

    </form>
}
export default ContactForm