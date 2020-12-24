import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";
import Main from "./Main";
import About from "./About";

class Fullpage extends React.Component {
    onLeave(origin, destination, direction) {
        console.log("Leaving section " + origin.index);
    };

    afterLoad(origin, destination, direction) {
        console.log("After load: " + destination.index);
    };

    render () {
        return (
            <ReactFullpage 
                licenseKey={null}
                scrollOverflow={true}
                sectionsColor={["orange", "purple", "white"]}
                onLeave={this.onLeave.bind(this)}
                afterLoad={this.afterLoad.bind(this)}
                render={({ state, fullpageApi }) => {
                    return (
                        <div id="fullpage-wrapper">
                            <div className="section section1">
                                <Main />
                            </div>
                            <div className="section">
                                <About />
                            </div>
                            <div className="section">
                                <h3>t e s t i n g</h3>
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