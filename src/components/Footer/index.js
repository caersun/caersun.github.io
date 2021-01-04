// import Row from "../Row";
// import Col from "../Col";
import Container from "../Container";
import "./style.css";

const Footer = props => {
    return (
        <footer className="page-footer lime darken-4">
            <Container>
                <div className="footer-copyright">
                    <div className="container center-align">© 2020 Cynthia Garcia</div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;