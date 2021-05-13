import React from 'react'
import '../signUp/SignUp.css'
import {useForm} from "react-hook-form";
// import SubmitButton from "../../components/submitButton/SubmitButton";
import emailjs from "emailjs-com";


function ContactForm(){
    const { handleSubmit, register } = useForm()

    // function onFormSubmit(data) {
    //     console.log(data)
    // }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_cwhabxh', 'template_h70skio', e.target, 'user_SIUc361GpWWJQ3v3gY7Ph')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return <main className="signup-wrapper">
    <form onSubmit={handleSubmit(sendEmail)} className="form">
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
                type="email"
                name="email"
                id="details-email"
                className="input"
                {...register("email")} required
            />
        </label>
        <label htmlFor="details-message">
            Uw bericht:
            <textarea
                name="message"
                rows="4"
                cols="35"
                id="details-message"
                className="input"
                {...register("message")} required
            />
        </label>

        <input type="submit" value="Send" />
        {/*<SubmitButton*/}
        {/*buttonText="Versturen"*/}
        {/*/>*/}

    </form>
    </main>
}
export default ContactForm