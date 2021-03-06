import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
import Modal from "../../components/Modal";
import ProjectModal from "../../components/ProjectModal";
import Project from "../../components/Project";

import projects from "../../utils/projects.json";

function Projects() {
    return (
        <div className="section valign-wrapper" id="projects" style={{
            // backgroundSize: `cover`,
            minHeight: `100vh`,
            height: `100%`,
            width: `100%`
        }}>
            <Container>
                <Row>
                    <Col size="s12">
                        <h2 className="center-align">projects</h2>
                    </Col>
                    <Col size="s12">
                        <h5 className="center-align">Here are a few of my recent projects. See more at my <a target="blank" href="https://github.com/caersun" className="light-green-text text-darken-4">GitHub</a>.</h5>
                    </Col>
                </Row>
                <Row>
                    {projects.map(project => (
                        <Col size="s12 m6 l4" key={project.modalID}>
                            <a className="modal-trigger" href={project.modalTrigger}>
                                <Project project={project} />
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>

            {projects.map(project => (
                <Modal modalID={project.modalID} key={project.modalID} >
                    <ProjectModal project={project} />
                </Modal>
            ))}
        </div>
    );
}

export default Projects;