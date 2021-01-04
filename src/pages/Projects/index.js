// import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import Row from "../../components/Row";
import Col from "../../components/Col";
import projects from "../../utils/projects.json";
import Container from "../../components/Container";
import Section from "../../components/Section";

function Projects() {
    return (
        <Section header="projects" id="projects">
            <Container>
                <Row>
                    <Col size="s12 m4">
                        <ProjectCard 
                            img={projects[0].previewImage}
                            title={projects[0].title}
                            description={projects[0].description}
                            repo={projects[0].repo}
                            site={projects[0].site}
                        />
                    </Col>
                    <Col size="s12 m4">
                        <ProjectCard 
                            img={projects[1].previewImage}
                            title={projects[1].title}
                            description={projects[1].description}
                            repo={projects[1].repo}
                            site={projects[1].site}
                        />
                    </Col>
                    <Col size="s12 m4">
                        <ProjectCard 
                            img={projects[2].previewImage}
                            title={projects[2].title}
                            description={projects[2].description}
                            repo={projects[2].repo}
                            site={projects[2].site}
                        />
                    </Col>
                    <Col size="s12 m4">
                        <ProjectCard 
                            img={projects[3].previewImage}
                            title={projects[3].title}
                            description={projects[3].description}
                            repo={projects[3].repo}
                            site={projects[3].site}
                        />
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default Projects;