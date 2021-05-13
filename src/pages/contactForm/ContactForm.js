import React, { useState, useRef } from 'react'
import '../signUp/SignUp.css'
import emailjs from "emailjs-com";


function ContactForm(){
    const nameRef = useRef()
    const subjectRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const [succesMessage, setSuccesMessage] = useState(false)

    function sendEmail(e) {
        e.preventDefault();
        setSuccesMessage(false)

        emailjs.sendForm('service_cwhabxh', 'template_h70skio', e.target, 'user_SIUc361GpWWJQ3v3gY7Ph')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        setSuccesMessage(true)
    }

    return <main className="signup-wrapper">
    <form onSubmit={sendEmail} className="form">
    <h2>Contactformulier</h2>
            <input
            type="text"
            name="name"
            placeholder="Naam"
            className="input"
            ref={nameRef} required
            />
        <input
            type="text"
            name="subject"
            placeholder="Onderwerp"
            className="input"
            ref={subjectRef} required
        />
            <input
                type="email"
                name="email"
                placeholder="Email-adres"
                className="input"
                ref={emailRef} required
            />

            <textarea
                name="message"
                placeholder="Uw bericht"
                className="input-textarea"
                rows="4"
                ref={messageRef} required
            />

        <input type="submit" value="Send" className="submit-send" />
        {succesMessage && <p>Uw bericht is succesvol verzonden!</p>}
    </form>

    </main>
}
export default ContactForm