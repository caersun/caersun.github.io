import Section from "../../components/Section";
import Carousel from "../../components/Carousel";
import Modal from "../../components/Modal";
import ProjectModal from "../../components/ProjectModal";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../utils/projects.json";

function Projects() {
    return (
        <Section header="projects" id="projects">
                <Carousel>
                    <a className="carousel-item modal-trigger" href="#project1">
                        <ProjectCard 
                            img={projects[0].previewImage}
                            title={projects[0].title}
                        />
                    </a>
                    <a className="carousel-item modal-trigger" href="#project2">
                        <ProjectCard 
                            img={projects[1].previewImage}
                            title={projects[1].title}
                        />
                    </a>
                    <a className="carousel-item modal-trigger" href="#project3">
                        <ProjectCard 
                            img={projects[2].previewImage}
                            title={projects[2].title}
                        />
                    </a>
                    <a className="carousel-item modal-trigger" href="#project4">
                        <ProjectCard 
                            img={projects[3].previewImage}
                            title={projects[3].title}
                        />
                    </a>
                </Carousel>
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
            <Modal modalID="project4">
                <ProjectModal 
                    img={projects[3].previewImage}
                    title={projects[3].title}
                    description={projects[3].description}
                    site={projects[3].site}
                    code={projects[3].code}
                />
            </Modal>
        </Section>
    );
}

export default Projects;