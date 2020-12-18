import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Projects() {
    // setting the initial state
    const [projects, setProjects] = useState([]);

    // load all projects
    useEffect(() => {
        loadProjects()
    }, []);

    function loadProjects() {
        // do a call to the "api" to get projects
        console.log("is this technically from an api?");
    };

    return <div>Have to add the projects and logic.</div>;
}

export default Projects;