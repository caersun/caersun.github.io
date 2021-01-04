import React from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Section from "../../components/Section";

function Main() {
    const mainStyles = {
        background: `url('./assets/images/pexels-ylanite-koppens-1445416.jpg') center center fixed`,
        height: `100vh`,
        position: `relative`,
        backgroundSize: `cover`,
    };

    return (
        <Section style={mainStyles} id="main">
            <Container>
                <Hero />
            </Container>
        </Section>
    );
}

export default Main;