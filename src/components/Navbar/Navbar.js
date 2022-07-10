import "./Navbar.css"
import {
    Routes,
    Route,
    Link,
    Outlet,
    NavLink
} from "react-router-dom";
import { withRouter } from "react-router-dom";
import logo from "../../assets/images/logo.jpg"
function Navbar() {
    return (
        <>
            <section className="navigation">
                <nav className="navbar fixed-top navbar-expand-lg bg-white  ">
                    <div className="container">
                        <div className="logo">
                            <a href=""><img
                                src={logo}
                                width={80} alt="Logo" /></a>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5 fw-bold">
                                <li className="nav-item" >
                                    <NavLink to="/home" className="nav-link px-2 mx-2" aria-current="page">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/features" className="nav-link px-2 mx-2">Features</NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink to="/services" className="nav-link px-2 mx-2">Services</NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className="nav-link px-2 mx-2">About</NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink to="/pricing" className="nav-link px-2 mx-2">Pricing</NavLink>
                                </li>
                            </ul>
                            <div>
                                <a href="https://podio.com/webforms/27230732/2095872" className="btn btn-orange " target="blank">Let's Talk Business</a>
                            </div>

                        </div>
                    </div>
                </nav>
            </section>

        </>
    );
}

export default Navbar;