import Section from "../../components/Section";
import Divider from "../../components/Divider";
import Col from "../../components/Col";
import Row from "../../components/Row";

const About = props => {
    return (
        <Section>
            <Row>
                <Col size="s12">
                    <h3 className="center-align">about</h3>
                </Col>
            </Row>
            <Row>
                <Col size="s12 m4">
                    <img className="circle responsive-img" src="./assets/images/about-profile.JPG" alt="Photograph of Cynthia Garcia"></img>
                </Col>
                <Col size="s12 m8">
                    <div className="card-panel">
                        <p>Here I will write things about myself.</p>
                        <Divider />
                        <p>Here I want to add a component of all my social media links and resume download in a nice little band.</p>
                    </div>
                </Col>
            </Row>
        </Section>
    );
};

export default About;