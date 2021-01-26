import Section from "../../components/Section";
// import ContainerV from "../../components/ContainerV";
import Col from "../../components/Col";
// import Row from "../../components/Row";
import Modal from "../../components/Modal";

const About = (props) => {
  return (
    <Section header="about" id="about">      
        <div className="row valign-wrapper">
          <Col size="s12 m4">
            <div className="center-align">
              <a className="modal-trigger" href="#work-modal">
                <i className="large material-icons light-green-text text-darken-4">work</i>
                <br />
                <div className="light-green-text text-darken-4">resume</div>
              </a>
              
            </div>
          </Col>
          <Col size="s12 m4">
            <div className="card-panel center-align">
              <p>I am Cynthia Garcia, a full-stack web designer and developer based out of beautiful Austin, Texas.</p>
            </div>
          </Col>
          <Col size="s12 m4">
            <div className="center-align">
              <a target="blank" href="https://github.com/caersun">
                <i className="large material-icons light-green-text text-darken-4">code</i>
                <br />
                <div className="light-green-text text-darken-4">repos</div>
              </a>
            </div>
          </Col>
        </div>
      <Modal modalID="work-modal">
        <div>
            Download <a target="blank" href="./assets/files/garcia-resume.pdf">Resume</a>
        </div>
      </Modal>
    </Section>
    );
};

export default About;
