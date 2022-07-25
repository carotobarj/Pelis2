import React from 'react'
import { Link } from 'react-router-dom'

//componentes
import Buscador from './Buscador.jsx';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <ul className="navbar-nav">
                        <Link to="/">
                            <img src="https://img.icons8.com/nolan/64/film-reel.png" height={40} width={40} alt='' />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <li className="nav-item"><Link to="/listado" className="nav-link">listado</Link></li>
                            <li className="nav-item"><Link to="/contacto" className="nav-link">contacto</Link></li>
                        </div>
                    </ul>
                    <Buscador />
                </div>

            </nav>
        </header>
    )
}

export default Header