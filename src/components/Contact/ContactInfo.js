const ContactInfo = props => {
    return (
        <div className="card-panel center-align" style={{ borderRadius: `20px` }}>
            <p><i className="material-icons">email</i></p>
            <p><a href="mailto:i.cynthiagarcia@gmail.com" className="light-green-text text-darken-4 truncate">i.cynthiagarcia@gmail.com</a></p>
            <br />
            <p><i className="material-icons">phone_iphone</i></p>
            <p><a href="tel:+19403209277" className="light-green-text text-darken-4">1 (940) 320-9277</a></p>
        </div>
    );
};

export default ContactInfo;