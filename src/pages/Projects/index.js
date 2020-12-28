import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";

function Projects() {
    // setting the initial state
    const [project, setProject] = useState({});
    const [projects, setProjects] = useState([]);

    // load all projects
    useEffect(() => {
        loadProjects()
    }, []);

    function loadProjects() {
        // do a call to the "api" to get projects
        console.log("is this technically from an api?");
        fetch("projects.json", {headers: { "Content-Type": "application/json", "Accept": "application/json" }})
            .then((response) => {
                console.log("response", response);
                return response.json();
            })
            .then(projects => {
                console.log("projects", projects);
                setProjects(projects);
                setProject(projects[0])
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="slide">
            <ProjectCard 
                img={project.previewImage}
                title={project.title}
                description={project.description}
                repo={project.repo}
                site={project.site}
            />
        </div>
    );
}

export default Projects;