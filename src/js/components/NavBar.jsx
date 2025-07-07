export const NavBar = () => {

    return (
    <nav className="navbar navbar-expand-lg bg-dark bg-opacity-75">
        <div className="container-fluid mx-4">
            <span className="navbar-brand text-light">Magic the Gathering</span>
            <button className="navbar-toggler navbar-dark bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-light">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled text-light" aria-disabled="true">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled text-light" aria-disabled="true">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)}