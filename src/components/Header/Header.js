import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

const Header = props => {
    return (
        <header>
            <Navbar />
            <Sidenav />
        </header>
    );
};

export default Header;