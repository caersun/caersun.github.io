// import CarouselItem from "./CarouselItem";

import { Component } from "react";
import M from "materialize-css";

class Carousel extends Component {
    componentDidMount() {
        // auto-initialize materialize logic
        M.AutoInit();
    }

    render() {
        return (
            <div className="carousel">
                {this.props.children}
            </div>
        )
    }
}
export default Carousel;