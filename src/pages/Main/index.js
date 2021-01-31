import React from "react";
import Container from "../../components/Container";
import Section from "../../components/Section";
import me from "./../../assets/images/about-profile.JPG";

function Main() {
    return (
        <Section id="main" style={{
            background: `url(${me}) center center fixed`,
            height: `100vh`,
            position: `relative`,
            backgroundSize: `cover`
        }}>
            <Container>
                {/* text-lighten-4 */}
                <h1 className="right-align light-green-text text-darken-3">hey! i'm cynthia</h1> 
                <h5 className="right-align flow-text light-green-text text-lighten-2">full stack web developer</h5>
                <h5 className="right-align flow-text light-green-text text-lighten-2">combining art, tech, and science</h5>
                <h5 className="right-align flow-text light-green-text text-lighten-2">austin, tx</h5>
            </Container>
        </Section>
    );
}

export default Main;