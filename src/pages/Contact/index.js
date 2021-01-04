import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container"
import ContactInfo from "../../components/Contact/ContactInfo";
import ContactForm from "../../components/Contact/ContactForm";
import Section from "../../components/Section";

const Contact = props => {
    return (
        <Section header="contact" id="contact">
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
        </Section>
    );
};

export default Contact;