import "./Navbar.css"
import {
    Routes,
    Route,
    Link,
    Outlet,
  } from "react-router-dom";
import logo from "../../assets/images/logo.jpg"
function Navbar() {
    return (
        <>
            <section className="navigation">
                <nav className="navbar fixed-top navbar-expand-lg bg-white  ">
                    <div className="container-fluid">
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
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
                                <li className="nav-item">
                                     <Link to="/home" className="nav-link " aria-current="page">Home</Link>
                                 </li>
                                <li className="nav-item">
                                <Link to="/features" className="nav-link">Features</Link>
                                
                                </li>
                                <li className="nav-item">
                                <Link to="/services" className="nav-link">Services</Link>
                                
                                </li>
                                <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                               
                                </li>
                                <li className="nav-item">
                                <Link to="/pricing" className="nav-link">Pricing</Link>
                               
                                    {/* <a className="nav-link" href="/pricing.html">Pricing</a> */}
                                </li>
                            </ul>
                            <div>
                                <button type="button" className="btn btn-orange me-2 ">Let's Talk Business</button>
                            </div>

                        </div>
                    </div>
                </nav>
            </section>

        </>
    );
}

export default Navbar;