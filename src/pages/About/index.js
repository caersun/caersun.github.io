// import Section from "../../components/Section";
// import ContainerV from "../../components/ContainerV";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Container from "../../components/Container";

const About = (props) => {
  return (
    <div className="section" id="about">
      <Container>
        <Row>
          <Col size="s12">
            <h2 className="center-align">about</h2>
          </Col>
        </Row>
        <Row>
          <Col size="s12">
            <div className="card-panel center-align light-green darken-3" style={{ borderRadius: `20px` }}>
              <Container>
              <h6 className="light-green-text text-lighten-5">Full-stack web developer with science and education background. Adaptable and quick problem solving to prioritize UX/UI based on team and client goals. Passionate about creating web applications with a focus on increased user accessibility. I am excited to leverage my experience as a dedicated researcher and accomplished classroom instructor to build meaningful apps and technologies as part of an engineering team. </h6>
              </Container>
            </div>
          </Col>
        </Row>
        <div className="row valign-wrapper hide-on-small-only">
          <Col size="s12 m4">
            <div className="card-panel center-align" style={{ borderRadius: `20px` }}>
              <br />
              <i className="large material-icons light-green-text text-darken-4">devices</i>
              <br />
              <h4><b>front end</b></h4>
              <br />
              <h6>I enjoy bringing mobile-first apps with clean UI/UX to life and merging simple designs with action.</h6>
              <br />
              <h5 className="light-green-text text-darken-4"><b>Tools:</b></h5>
              <h6>HTML5</h6>
              <h6>CSS3</h6>
              <h6>JavaScript ES6</h6>
              <h6>Bootstrap</h6>
              <h6>Bulma</h6>
              <h6>Materialize</h6>
              <h6>Terminal</h6>
              <h6>Github</h6>
              <h6>Node</h6>
            </div>
          </Col>
          <Col size="s12 m4">
            <div className="center-align hoverable" style={{ borderRadius: `100px` }}>
              <br />
              <a target="blank" href="./assets/files/garcia-resume.pdf">
                <i className="large material-icons light-green-text text-darken-4">file_download</i>
                <h5 className="light-green-text text-darken-4">resume</h5>
              </a>
              <br />
            </div>
          </Col>
          <Col size="s12 m4">
            <div className="card-panel center-align" style={{ borderRadius: `20px` }}>
              <br />
              <i className="large material-icons light-green-text text-darken-4">build</i>
              <br />
              <h4><b>back end</b></h4>
              <br />
              <h6>I focus and knuckle-down to solve the back-end complexities so users never have to think about them.</h6>
              <br />
              <h5 className="light-green-text text-darken-4"><b>Tools:</b></h5>
              <h6>Express</h6>
              <h6>Vanilla JS / jQuery</h6>
              <h6>SQL / NoSQL</h6>
              <h6>APIs / Restful API</h6>
              <h6>MongoDB</h6>
              <h6>MySQL</h6>
              <h6>JSX</h6>
              <h6>React</h6>
              <h6>Redux</h6>
            </div>
          </Col>
        </div>
        <div className="row hide-on-med-and-up">
          <Col size="s12">
            <div className="card-panel center-align" style={{ borderRadius: `20px` }}>
              <br />
              <i className="large material-icons light-green-text text-darken-4">devices</i>
              <br />
              <h4><b>front end</b></h4>
              <br />
              <h6>I enjoy bringing mobile-first apps with clean UI/UX to life and merging simple designs with action.</h6>
              <br />
              <h5 className="light-green-text text-darken-4"><b>Tools:</b></h5>
              <h6>HTML5</h6>
              <h6>CSS3</h6>
              <h6>JavaScript ES6</h6>
              <h6>Bootstrap</h6>
              <h6>Bulma</h6>
              <h6>Materialize</h6>
              <h6>Terminal</h6>
              <h6>Github</h6>
              <h6>Node</h6>
            </div>
          </Col>
          <Col size="s12">
            <div className="center-align hoverable" style={{ borderRadius: `100px` }}>
              <br />
              <a target="blank" href="./assets/files/garcia-resume.pdf">
                <i className="large material-icons light-green-text text-darken-4">file_download</i>
                <h5 className="light-green-text text-darken-4">resume</h5>
              </a>
              <br />
            </div>
          </Col>
          <Col size="s12">
            <div className="card-panel center-align" style={{ borderRadius: `20px` }}>
              <br />
              <i className="large material-icons light-green-text text-darken-4">build</i>
              <br />
              <h4><b>back end</b></h4>
              <br />
              <h6>I focus and knuckle-down to solve the back-end complexities so users never have to think about them.</h6>
              <br />
              <h5 className="light-green-text text-darken-4"><b>Tools:</b></h5>
              <h6>Express</h6>
              <h6>Vanilla JS / jQuery</h6>
              <h6>SQL / NoSQL</h6>
              <h6>APIs / Restful API</h6>
              <h6>MongoDB</h6>
              <h6>MySQL</h6>
              <h6>JSX</h6>
              <h6>React</h6>
              <h6>Redux</h6>
            </div>
          </Col>
        </div>
      </Container>
    </div> 
    );
};

export default About;
