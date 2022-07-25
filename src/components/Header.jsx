import React from 'react'
import { Link } from 'react-router-dom'

//componentes
import Buscador from './Buscador.jsx';

function Header(props) {
    let token = sessionStorage.getItem('token');
    return (

        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/">
                        <img src="https://img.icons8.com/nolan/64/film-reel.png" height={40} width={40} alt='' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link to="/listado" className="nav-link">Listado</Link></li>
                            <li className="nav-item"><Link to="/favoritos" className="nav-link">Favoritos</Link></li>
                            <li className="nav-item d-flex align-items-center"><span className="text-success "> {token && props.favoritos.length > 0 && <> ❤️:{props.favoritos.length}</>}</span></li>
                        </ul>
                    </div>
                    <Buscador />
                </div>

            </nav>
        </header>
    )
}

export default Header