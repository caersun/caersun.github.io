// import Section from "../../components/Section";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
import Modal from "../../components/Modal";
import ProjectModal from "../../components/ProjectModal";
import projects from "../../utils/projects.json";
import me from "./../../assets/images/about-profile.JPG";
import ProjectImg from "../../components/ProjectImg";

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
                    <Col size="s12 m4">
                        <a className="modal-trigger" href="#project1">
                        <ProjectImg 
                                img={projects[0].previewImage}
                                title={projects[0].title}
                            />
                        </a>
                    </Col>
                    <Col size="s12 m4">
                        <a className="modal-trigger" href="#project2">
                        <ProjectImg 
                                img={projects[1].previewImage}
                                title={projects[1].title}
                            />
                        </a>
                    </Col>
                    <Col size="s12 m4">
                        <a className="modal-trigger" href="#project3">
                        <ProjectImg 
                                img={projects[2].previewImage}
                                title={projects[2].title}
                            />
                        </a>
                    </Col>
                </Row>
            </Container>

            <Modal modalID="project1">
                <ProjectModal 
                    img={projects[0].previewImage}
                    title={projects[0].title}
                    description={projects[0].description}
                    site={projects[0].site}
                    code={projects[0].code}
                />
            </Modal>
            <Modal modalID="project2">
                <ProjectModal 
                    img={projects[1].previewImage}
                    title={projects[1].title}
                    description={projects[1].description}
                    site={projects[1].site}
                    code={projects[1].code}
                />
            </Modal>
            <Modal modalID="project3">
                <ProjectModal 
                    img={projects[2].previewImage}
                    title={projects[2].title}
                    description={projects[2].description}
                    site={projects[2].site}
                    code={projects[2].code}
                />
            </Modal>
        </div>
    );
}

export default Projects;