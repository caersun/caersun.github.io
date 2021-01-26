// import Row from "../Row";
// import Col from "../Col";
import Container from "../Container";
// import "./style.css";

const Footer = props => {
    return (
        <footer className="page-footer light-green lighten-4">
            <Container>
                <div className="center-align"><h5 className="light-green-text text-darken-4">commissions <i>open</i></h5></div>
                <br />
                <div className="footer-copyright">
                    <Container>
                        <div className="grey-text text-darken-3">© 2020 Cynthia Garcia
                            <a className="grey-text text-darken-3 right" target="blank" href="https://github.com/caersun"><i className="fab fa-github fa-fw"></i></a> 
                            <a className="grey-text text-darken-3 right" target="blank" href="https://instagram.com/caersun"><i className="fab fa-instagram fa-fw"></i></a> 
                            <a className="grey-text text-darken-3 right" target="blank" href="https://linkedin.com/in/i-cynthiagarcia"><i className="fab fa-linkedin-in fa-fw"></i></a>
                        </div>
                    </Container>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;