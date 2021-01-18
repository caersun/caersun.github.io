import React from "react";
import Container from "../../components/Container";
import Section from "../../components/Section";
// import "./style.css";

function Main() {
    const mainStyle = {
        background: `url("./assets/images/about-profile.jpg") center center fixed`,
        height: `100vh`,
        position: `relative`,
        backgroundSize: `cover`
    }

    return (
        <Section style={mainStyle} id="main">
            <Container>
                {/* text-lighten-4 */}
                <h1 className="right-align light-green-text text-darken-3">hey! i'm cynthia</h1> 
                <h5 className="right-align flow-text light-green-text text-lighten-2">// full stack web developer</h5>
                <h5 className="right-align flow-text light-green-text text-lighten-2">// combining art, tech, and science</h5>
                <h5 className="right-align flow-text light-green-text text-lighten-2">// austin, tx</h5>
            </Container>
        </Section>
    );
}

export default Main;