import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <ul className="nav justify-content-end">
                    <li className="nav-item"><Link to="/home" className="nav-link active">home</Link></li>
                    <li className="nav-item"><Link to="/listado" className="nav-link active">listado</Link></li>
                    <li className="nav-item"><Link to="/contacto" className="nav-link active">contacto</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header