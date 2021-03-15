import React from "react";
import Row from "../Row";
import emailjs from "emailjs-com";

const ContactForm = props => {
    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm(
            "gmail", 
            "template_phs5lwi", 
            e.target, 
            "user_CcmfBNpP8UQ9XuUWWKAUt"
            ).then(
            result => { console.log(result.text); }, 
            error => { console.log(error.text); }
        );

        e.target.reset();
    };

    return (
        <form className="col s12" onSubmit={handleSubmit}>
            <Row>
                <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input type="text" className="validate" id="name" name="name" required />
                    <label htmlFor="name">name</label>
                </div>
                <div className="input-field col s6">
                    <i className="material-icons prefix">email</i>
                    <input  type="text" className="validate" id="email" name="email" required />
                    <label htmlFor="email">email</label>
                </div>
            </Row>
            <Row>
                <div className="input-field col s12">
                    <i className="material-icons prefix">mode_edit</i>
                    <textarea className="materialize-textarea" rows="4" id="message" name="message" required></textarea>
                    <label htmlFor="message">message</label>
                </div>
            </Row>
            <Row>
                <button className="btn-large waves-effect waves-light right light-green darken-4" type="submit" style={{ borderRadius: `30px` }}> 
                {/* name="action" */}
                    Send Message
                </button>
            </Row>
        </form>
    );
};

export default ContactForm;