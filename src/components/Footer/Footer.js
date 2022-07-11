import "./Footer.css"
function Footer() {
    return (
        <>
            <div className="container fs-5 ">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 ">© 2022 Company, Inc</p>

                    <a href="/"
                        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <svg className="bi me-2" width={40} height={32}>
                            <use xlinkHref="#bootstrap"></use>
                        </svg>
                    </a>

                    <ul className="nav col-md-4 justify-content-end ">
                        <li className="nav-item"><a href="terms-and-privacy" className="nav-link px-2"> Terms & Privacy. </a></li>
                        <li className="nav-item"><a href="https://podio.com/webforms/27230732/2095872" target="blank" className="nav-link px-2">Contact</a></li>
                    </ul>
                </footer>
            </div>

        </>
    );
}

export default Footer;