import Row from "./Row";
import Col from "./Col";
import Container from "./Container";

const Footer = props => {
    return (
        <footer className="page-footer">
            <Container>
                <Row>
                    <Col size="l6 s12">
                        <h5 class="white-text">Footer Content</h5>
                        <p>Come back and add footer content!</p>
                    </Col>
                    <Col size="l4 offset-l2 s12">
                        <h5 class="white-text">Links</h5>
                        <p>Come back and add links!</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;