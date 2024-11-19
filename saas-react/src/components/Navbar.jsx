import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <div className="header-content">
                <Link to="/"><h1>Tools Whatever</h1></Link>
                <nav>
                    <Link to="/login">Login</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
