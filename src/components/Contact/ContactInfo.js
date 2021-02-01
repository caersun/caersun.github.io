const ContactInfo = props => {
    return (
        <div className="card-panel center-align" style={{ borderRadius: `20px` }}>
            <p><i className="material-icons">email</i></p>
            <p><a href="mailto:i.cynthiagarcia@gmail.com" className="light-green-text text-darken-4">i.cynthiagarcia@gmail.com</a></p>
            <br />
            <p><i className="material-icons">phone_iphone</i></p>
            <p><a href="tel:+19176868652" className="light-green-text text-darken-4">1 (917) 686-8652</a></p>
        </div>
    );
};

export default ContactInfo;