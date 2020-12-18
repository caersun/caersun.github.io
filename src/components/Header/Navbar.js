import NavLinks from "./NavLinks";

const Navbar = props => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" class="brand-logo">cg</a>
                <a href="/" data-target="mobile-sidenav" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
                <NavLinks nav="right hide-on-med-and-down" />
            </div>
        </nav>
    );
};

export default Navbar;