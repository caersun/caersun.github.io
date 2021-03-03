import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container"
import ContactInfo from "../../components/Contact/ContactInfo";
import ContactForm from "../../components/Contact/ContactForm";
// import Section from "../../components/Section";

const Contact = props => {
    return (
        <div className="section valign-wrapper" id="contact" style={{
            minHeight: `100vh`,
            height: `100%`,
            width: `100%`
        }}>
            <Container>
                <Row>
                    <Col size="s12">
                        <h2 className="center-align">contact</h2>
                    </Col>
                    <Col size="s12">
                        <h5 className="center-align">Let's work together to bring your ideas to life.</h5>
                    </Col>
                </Row>
                <Row>
                    <Col size="s12 m4">
                        <ContactInfo />
                    </Col>
                    <Col size="s12 m8">
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;