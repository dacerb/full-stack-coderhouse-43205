import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <>
            <header className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid col-12 col-md-6">
                    <img className="logo-branding" src="../../src/assets/sonor.png" alt="Logo Sonor" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <nav className="collapse navbar-collapse menu-options col-12 text-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                Instruments
                            </li>
                            <li className="nav-item">
                                Company
                            </li>
                            <li className="nav-item">
                                News
                            </li>
                        </ul>
                    </nav>
                    <CartWidget />
                </div>
            </header>
            
        </>
    )
}

export default NavBar