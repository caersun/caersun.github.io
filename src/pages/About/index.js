import Section from "../../components/Section";
import Divider from "../../components/Divider";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

const About = (props) => {
  return (
    <Section header="about" id="about">
      <Container>      
        <Row>
          <Col size="s12 m4">
            <img
              className="circle responsive-img"
              src="./assets/images/about-profile.JPG"
              alt="Photograph of Cynthia Garcia"
            ></img>
          </Col>
          <Col size="s12 m8">
            <div className="card-panel">
              <p>I am a full-stack web designer and developer based out of beautiful Austin, Texas.</p>
              <Divider />
              <br />
              <Row>
                <Col>
                  <i class="fab fa-github"></i>
                  <a target="blank" href="https://github.com/caersun"> GitHub</a>
                </Col>
                <Col>
                  <i class="fab fa-linkedin-in"></i>
                  <a target="blank" href="https:/linkedin.com/in/i-cynthiagarcia"> LinkedIn</a>
                </Col>
                <Col>
                  <i class="far fa-file-pdf"></i>
                  <a target="blank" href="./assets/files/garcia-resume.pdf"> View Resume</a>
                </Col>
              </Row>
              {/* <p>
              <ul>
                            <li><i class="fab fa-github"></i><a target="blank" href="https://github.com/caersun">
                                    GitHub</a></li>
                            <li><i class="fab fa-linkedin-in"></i><a target="blank"
                                    href="https://www.linkedin.com/in/i-cynthiagarcia/"> LinkedIn</a></li>
                            <li><i class="far fa-file-pdf"></i><a target="_blank" href="./assets/files/garcia-resume.pdf">
                                    Download Resume</a></li>
                        </ul>
              </p> */}
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
    );
};

export default About;
