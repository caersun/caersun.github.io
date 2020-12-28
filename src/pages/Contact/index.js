import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container"
import ContactInfo from "../../components/Contact/ContactInfo";
import ContactForm from "../../components/Contact/ContactForm";

const Contact = props => {
    return (
        <Container>
            <Row>
                <Col size="s12 m4">
                    <ContactInfo />
                </Col>
                <Col size="s12 m8">
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;