import React, { useState } from "react";
import Row from "../Row";
// import Col from "../Col";
import emailjs from "emailjs-com";

const ContactForm = props => {
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    // const submitRequest = async (event) => {
    //     event.preventDefault();
    //     console.log("Sending message from " + email, message);
    // }

    // const [status, setStatus] = useState("Submit");
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setStatus("Sending...");

    //     const { name, email, message } = event.target.elements;
    //     let details = {
    //         name: name.value,
    //         email: email.value,
    //         message: message.value
    //     };

    //     let response = await fetch("http://localhost:5000/contact", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json;charset=utf-8", },
    //         body: JSON.stringify(details)
    //     });

    //     setStatus("Submit");
    //     let result = await response.json();
    //     alert(result.status);
    // };

    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm("gmail", "template_phs5lwi", e.target, "user_CcmfBNpP8UQ9XuUWWKAUt")
        .then(
            result => { console.log(result.text); }, 
            error => { console.log(error.text); }
        );

        e.target.reset();
    };

    return (
        <form className="col s12" onSubmit={handleSubmit}>
            <Row>
                <div class="input-field col s6">
                    <i class="material-icons prefix">account_circle</i>
                    <input type="text" class="validate" id="name" name="name" required />
                    <label for="name">name</label>
                </div>
                <div class="input-field col s6">
                    <i class="material-icons prefix">email</i>
                    <input  type="text" class="validate" id="email" name="email" required />
                    <label for="email">email</label>
                </div>
            </Row>
            <Row>
                <div class="input-field col s12">
                    <i class="material-icons prefix">mode_edit</i>
                    <textarea class="materialize-textarea" rows="4" id="message" name="message" required></textarea>
                    <label for="message">message</label>
                </div>
            </Row>
            <Row>
                <button class="btn-large waves-effect waves-light right light-green darken-4" type="submit" style={{ borderRadius: `30px` }}> 
                {/* name="action" */}
                    Send Message
                </button>
            </Row>
        </form>
    );
};

export default ContactForm;