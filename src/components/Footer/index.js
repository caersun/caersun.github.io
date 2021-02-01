import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
// import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { twitter } from "@fortawesome/free-brands-svg-icons";

const Footer = props => {
    return (
        <footer className="page-footer light-green darken-3">
            <Container>
                <Row>
                    <Col size="s2 center-align">
                        <a className="light-green-text text-lighten-4" target="blank" href="https://linkedin.com/in/i-cynthiagarcia">
                            <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="lg" />
                        </a>
                    </Col>
                    <Col size="s2 center-align">
                        <a className="light-green-text text-lighten-4" target="blank" href="https://instagram.com/caersun">
                           <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
                        </a> 
                    </Col>
                    <Col size="s2 center-align">
                        <a className="light-green-text text-lighten-4" target="blank" href="https://github.com/caersun">
                            <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                        </a> 
                    </Col>
                    <Col size="s2 center-align">
                        <a className="light-green-text text-lighten-4" target="blank" href="https://twitter.com/caersun">
                            <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
                        </a>
                    </Col>
                    <Col size="s2 center-align">
                        <a className="light-green-text text-lighten-4" target="blank" href="mailto:i.cynthiagarcia@gmail.com">
                            <FontAwesomeIcon icon="envelope" size="lg" />
                        </a>
                    </Col>
                    <Col size="s2 center-align">
                        <a className="light-green-text text-lighten-4" target="blank" href="tel:+19176868652">
                            <FontAwesomeIcon icon="phone" size="lg" />
                        </a>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright">
                <div className="container center-align">
                    me © MMXXI
                </div>
            </div>
        </footer>
    );
};

export default Footer;