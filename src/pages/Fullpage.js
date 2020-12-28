import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
// import "fullpage.js/vendors/scrolloverflow";
// scrollOverflow=true
// <!-- This following line is only necessary in the case of using the option `scrollOverflow:true` -->
// <script type="text/javascript" src="vendors/scrolloverflow.min.js"></script>
import Main from "./Main";
import About from "./About";
import Projects from "./Projects"
import Contact from "./Contact";

class Fullpage extends React.Component {
    // onLeave(origin, destination, direction) {
    //     console.log("Leaving section " + origin.index);
    // };

    // afterLoad(origin, destination, direction) {
    //     console.log("After load: " + destination.index);
    // };

    // onLeave={this.onLeave.bind(this)}
    // afterLoad={this.afterLoad.bind(this)}

    

    render () {
        return (
            <ReactFullpage 
                licenseKey={null}
                render={({ state, fullpageApi }) => {
                    const mainStyles = {
                        background: `url('./assets/images/pexels-ylanite-koppens-1445416.jpg') center center fixed`,
                        height: `100vh`,
                        position: `relative`,
                        backgroundSize: `cover`,
                        // -webkit-background-size: cover;
                        // -moz-background-size: cover;
                        // -o-background-size: cover;
                        // -msn-background-size: cover;
                    }
                    return (
                        <div id="fullpage-wrapper">
                            <div className="section section1" style={mainStyles}>
                                <Main />
                            </div>
                            <div className="section">
                                <About />
                            </div>
                            <div className="section">
                                <Projects />
                            </div>
                            <div className="section">
                                <Contact />
                                <button onClick={() => fullpageApi.moveTo(1, 0)}>
                                    Move to top
                                </button>
                            </div>
                        </div>
                    );
                }}
            />
        );
    };
}

export default Fullpage;