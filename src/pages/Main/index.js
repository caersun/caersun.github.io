import React from "react";
import Container from "../../components/Container";
// import Section from "../../components/Section";
import me from "./../../assets/images/about-profile.JPG";

function Main() {
    return (
        <div className="section valign-wrapper" id="main" style={{
            background: `url(${me}) center center fixed`,
            minHeight: `100vh`,
            position: `relative`,
            backgroundSize: `cover`,
            height: `100%`,
            width: `100%`
        }}>
            <Container>
                {/* text-lighten-4 */}
                <h1 className="right-align light-green-text text-darken-3">cynthia garcia</h1> 
                <h5 className="right-align flow-text light-green-text text-lighten-2">full stack web developer</h5>
                <h5 className="right-align flow-text light-green-text text-lighten-2">combining art, tech, and science</h5>
                <h5 className="right-align flow-text light-green-text text-lighten-2">austin, tx</h5>
            </Container>
        </div>
    );
}

export default Main;