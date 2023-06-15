import { Link, NavLink } from "react-router-dom"

import CartWidget from "../CartWidget/CartWidget"

import "./NavBar.css"
const NavBar = () => {

    const activeStyle = 'active nav-link'

    return (
        <>
            <header >
                <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                    <div className="container  d-flex text-center mt-5 mb-4 pt-3 pb-3">
                            <div className="col">
                                <Link to={"/"}><img className="logo-branding" src="../public/assets/sonor.png" alt="Logo Sonor" /></Link>
                            </div>
                            <div className="col">
                                <button className="navbar-toggler mb-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    <NavLink 
                                        to={"/category/1"} 
                                        className={({isActive}) => isActive ? activeStyle: "nav-link"}
                                        aria-current="page"> 
                                        Snare </NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink 
                                        to={"/category/2"} 
                                        className={({isActive}) => isActive ? activeStyle: "nav-link"}
                                        aria-current="page">  
                                        Drums </NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <CartWidget />
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </nav>
            </header>  
        </>
    )
}

export default NavBar