import "./Navbar.css"
import logo from  "../../assets/images/logo.jpg"
function Navbar() {
    return (
        <>
            <section class="navigation">
                <nav class="navbar fixed-top navbar-expand-lg bg-white  ">
                    <div class="container">
                        <div class="logo">
                            <a href=""><img
                                src={logo}
                                width="80" alt="" /></a>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Features</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="services.html">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about.html">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/pricing.html">Pricing</a>
                                </li>
                            </ul>
                            <div>
                                <button type="button" class="btn btn-orange me-2 ">Let's Talk Business</button>
                            </div>

                        </div>
                    </div>
                </nav>
            </section>

        </>
    );
}

export default Navbar;