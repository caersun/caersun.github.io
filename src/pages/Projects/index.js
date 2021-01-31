import Section from "../../components/Section";
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
        <Section header="projects" id="projects">
            <Container>
            <Row>
                <Col size="s12">
                    <h5 className="center">Here are a few of my recent projects. See more at my <a tatget="blank" href="https://github.com/caersun" className="light-green-text text-darken-4">GitHub</a>.</h5>
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
            {/* <Modal modalID="project4"> 
                <ProjectModal 
                    img={projects[3].previewImage}
                    title={projects[3].title}
                    description={projects[3].description}
                    site={projects[3].site}
                    code={projects[3].code}
                />
            </Modal> */}
        </Section>
    );
}

export default Projects;