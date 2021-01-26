// import CarouselItem from "./CarouselItem";

import { Component } from "react";
import M from "materialize-css";

class Carousel extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll(".carousel");
        // auto-initialize materialize logic
        M.Carousel.init(elems, {
            dist: -75,
            indicators: true
        });
        // M.AutoInit();
        // M.Carousel.init({ fullWidth: true, indicators: true });
        // document.addEventListener("DOMContentLoaded", () => {
        //     let elems = document.querySelectorAll(".carousel");
        //     M.Carousel.init(elems, {
        //         fullWidth: true,
        //         indicators: true
        //     });

        // })
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