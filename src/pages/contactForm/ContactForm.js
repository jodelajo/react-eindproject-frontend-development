import React from 'react'
import '../signUp/SignUp.css'
import emailjs from "emailjs-com";


function ContactForm(){

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
    <form onSubmit={sendEmail} className="form">
    <h2>Contactformulier</h2>
            <input
            type="text"
            name="name"
            placeholder="Naam"
            className="input"
            />
        <input
            type="text"
            name="subject"
            placeholder="Onderwerp"
            className="input"
        />
            <input
                type="email"
                name="email"
                placeholder="Email-adres"
                className="input"
            />

            <textarea
                name="message"
                placeholder="Uw bericht"
                className="input-textarea"
                rows="4"
            />

        <input type="submit" value="Send" className="submit-send" />

    </form>
    </main>
}
export default ContactForm