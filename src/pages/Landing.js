import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import API from "../utils/API";
import Container from "../components/Container";

function Landing() {
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

    return (
        <Container>
           <Hero /> 
        </Container>
    );
}

export default Landing;