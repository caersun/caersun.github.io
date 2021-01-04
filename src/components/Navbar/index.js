import { Component } from "react";
import M from "materialize-css";
// import "./style.css";

class Navbar extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <header>
                <nav className="lime darken-4">
                    <div className="nav-wrapper">
                        <a href="/" class="brand-logo">cg</a>
                        <a href="/" data-target="mobile-sidenav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#main">Main</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-sidenav">
                        <li><a href="#main">Main</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                </ul>
            </header>
        );
    }
}

export default Navbar;